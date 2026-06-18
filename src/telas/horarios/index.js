import { useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';
import { buscarDetalhesRota, listarRotas } from '../../services/rotas';

const DEFAULT_ROUTE_COLOR = '#1769E0';
const DEFAULT_ROUTE_SOFT_COLOR = '#EAF2FF';

function getRouteId(route) {
  return route?.id_rota || route?.id || route?.idRota;
}

function getRouteName(route) {
  return (
    route?.nome_linhas ||
    route?.nome_rota ||
    route?.nome ||
    `Rota ${getRouteId(route) || ''}`.trim()
  );
}

function routeTheme(route) {
  return {
    color: route?.cor_rota || route?.corRota || route?.cor || DEFAULT_ROUTE_COLOR,
    softColor:
      route?.cor_rota_suave ||
      route?.corRotaSuave ||
      route?.cor_suave ||
      DEFAULT_ROUTE_SOFT_COLOR,
  };
}

function normalizeRoutes(items) {
  const seen = new Set();

  return items.reduce((routes, route) => {
    const id = Number(getRouteId(route));

    if (!Number.isFinite(id) || seen.has(id)) {
      return routes;
    }

    seen.add(id);
    routes.push({
      ...route,
      id_rota: id,
    });

    return routes;
  }, []);
}

function getScheduleTime(schedule) {
  return schedule?.hora || schedule?.passagem_horarios || '';
}

function getNextSchedule(routeDetails, scheduleGroups) {
  if (routeDetails?.proxima_saida || routeDetails?.proximaSaida) {
    return routeDetails.proxima_saida || routeDetails.proximaSaida;
  }

  const times = scheduleGroups
    .flatMap((point) => point.horarios.map(getScheduleTime))
    .filter(Boolean)
    .map((time) => String(time).slice(0, 5))
    .sort();

  if (times.length === 0) {
    return '--:--';
  }

  const now = new Date();
  const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(
    now.getMinutes(),
  ).padStart(2, '0')}`;

  return times.find((time) => time >= currentTime) || times[0];
}

function groupSchedulesByPoint(points = [], schedules = []) {
  const pointMap = new Map(
    points.map((point) => [
      String(point.id_ponto || point.id_pontos || point.id),
      {
        id_ponto: point.id_ponto || point.id_pontos || point.id,
        nome_ponto: point.nome_ponto || point.nome_pontos || '',
        horarios: [],
      },
    ]),
  );

  schedules.forEach((schedule) => {
    const pointId = schedule.id_ponto || schedule.id_pontos || schedule.id;
    const key = String(pointId);
    const current =
      pointMap.get(key) || {
        id_ponto: pointId,
        nome_ponto: schedule.nome_ponto || schedule.nome_pontos || '',
        horarios: [],
      };

    current.horarios.push(schedule);
    pointMap.set(key, current);
  });

  return Array.from(pointMap.values());
}

function getRouteName(route) {
  return route?.nome_linhas || route?.nome_rota || `Rota ${route?.id_rota}`;
}

function getScheduleTime(schedule) {
  return schedule?.hora || schedule?.passagem_horarios || schedule?.horario || '';
}

function routeTheme(route, index) {
  if (route?.cor || route?.color) {
    return {
      color: route.cor || route.color,
      softColor: route.cor_suave || route.softColor || route.cor_clara || '#DBEAFE',
    };
  }

  return ROUTE_THEMES[index % ROUTE_THEMES.length];
}

function groupSchedulesByPoint(schedules = []) {
  return schedules.reduce((groups, schedule) => {
    const pointId = schedule.id_ponto || schedule.ponto_id || schedule.id;
    const key = String(pointId || schedule.nome_ponto || groups.size);
    const current = groups.get(key) || {
      id: pointId || key,
      name: schedule.nome_ponto || schedule.nome_pontos || 'Ponto sem nome',
      times: [],
    };
    const time = getScheduleTime(schedule);

    if (time) {
      current.times.push(time);
    }

    groups.set(key, current);
    return groups;
  }, new Map());
}

function normalizeLine(route, details, index) {
  const theme = routeTheme(route, index);
  const scheduleGroups = groupSchedulesByPoint(details?.horarios || []);
  const routePoints = details?.pontos || [];
  const points = routePoints.length
    ? routePoints.map((point) => {
        const id = point.id_ponto || point.id;
        const schedulePoint = scheduleGroups.get(String(id));

        return {
          id: id || point.nome_ponto || point.nome_pontos,
          name: point.nome_ponto || point.nome_pontos || 'Ponto sem nome',
          times: [...(schedulePoint?.times || [])].sort(),
        };
      })
    : Array.from(scheduleGroups.values()).map((point) => ({
        ...point,
        times: [...point.times].sort(),
      }));

  return {
    id: route.id_rota,
    name: getRouteName(route),
    color: theme.color,
    softColor: theme.softColor,
    origin:
      details?.origem ||
      route?.origem ||
      points[0]?.name ||
      'Origem não informada',
    destination:
      details?.destino ||
      route?.destino ||
      points[points.length - 1]?.name ||
      'Destino não informado',
    points,
  };
}

export default function Horarios() {
  const navigation = useNavigation();
  const [routes, setRoutes] = useState([]);
  const [selectedRouteId, setSelectedRouteId] = useState(null);
  const [routeDetails, setRouteDetails] = useState(null);
  const [loadingRoutes, setLoadingRoutes] = useState(true);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    loadRoutes();
  }, []);

  useEffect(() => {
    if (selectedRouteId) {
      loadRouteDetails(selectedRouteId);
    }
  }, [selectedRouteId]);

  async function loadRoutes() {
    try {
      setLoadingRoutes(true);
      setError('');

      const loadedRoutes = normalizeRoutes(await listarRotas());

      setRoutes(loadedRoutes);
      setSelectedRouteId((currentId) => currentId || loadedRoutes[0]?.id_rota || null);
    } catch (loadError) {
      setError(loadError.message);
    } finally {
      setLoadingRoutes(false);
    }
  }

  async function loadRouteDetails(routeId) {
    try {
      setLoadingDetails(true);
      setError('');
      setRouteDetails(null);

      const selectedRoute = routes.find(
        (route) => Number(getRouteId(route)) === Number(routeId),
      );
      const details = await buscarDetalhesRota(routeId);

      setRouteDetails({
        ...selectedRoute,
        ...details,
        pontos: details.pontos || [],
        horarios: details.horarios || [],
      });
    } catch (loadError) {
      setError(loadError.message);
    } finally {
      setLoadingDetails(false);

    }
  }

  function goHome() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  }


  function selectRoute(routeId) {
    setSelectedRouteId(routeId);
  }

  const selectedRoute = useMemo(
    () =>
      routes.find((route) => Number(getRouteId(route)) === Number(selectedRouteId)) ||
      null,
    [routes, selectedRouteId],
  );
  const selectedLine = routeDetails || selectedRoute;
  const selectedTheme = routeTheme(selectedLine);
  const routeName = selectedLine ? getRouteName(selectedLine) : 'Selecione uma rota';
  const scheduleGroups = useMemo(
    () => groupSchedulesByPoint(routeDetails?.pontos || [], routeDetails?.horarios || []),
    [routeDetails],
  );
  const nextTime = getNextSchedule(routeDetails, scheduleGroups);


  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.85}
          onPress={goHome}
        >
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>

        <View style={styles.headerTextGroup}>
          <Text style={styles.brand}>OminiBus</Text>
          <Text style={styles.headerTitle}>Horários</Text>
        </View>
      </View>


      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.nextCard, { borderColor: selectedTheme.color }]}>
          <View style={styles.nextInfo}>
            <Text style={styles.nextLabel}>Rota</Text>
            <Text style={styles.routeName} numberOfLines={1}>
              {routeName}
            </Text>
            {routeDetails?.sentido ? (
              <Text style={styles.routeDirection}>{routeDetails.sentido}</Text>
            ) : null}
          </View>

          <View style={styles.nextRight}>
            <Text style={styles.nextLabel}>Próximo horário</Text>
            <Text style={styles.nextTime}>{loadingDetails ? '--:--' : nextTime}</Text>
            <Text style={styles.pointCount}>
              {scheduleGroups.length} {scheduleGroups.length === 1 ? 'ponto' : 'pontos'}
            </Text>
          </View>
        </View>

        <View style={styles.routesCard}>
          {loadingRoutes ? (
            <ActivityIndicator color="#8FD8FF" size="large" />
          ) : routes.length === 0 ? (
            <Text style={styles.emptyText}>Nenhuma rota cadastrada no momento.</Text>
          ) : (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.lineSelector}
            >
              {routes.map((route) => {
                const routeId = getRouteId(route);
                const isSelected = Number(routeId) === Number(selectedRouteId);
                const theme = routeTheme(route);

                return (
                  <TouchableOpacity
                    key={routeId}
                    style={[
                      styles.lineButton,
                      { backgroundColor: theme.softColor },
                      isSelected && {
                        backgroundColor: theme.color,
                        borderColor: '#FFFFFF',
                      },
                    ]}
                    activeOpacity={0.86}
                    onPress={() => selectRoute(routeId)}
                  >
                    <View
                      style={[
                        styles.lineDot,
                        { backgroundColor: isSelected ? '#FFFFFF' : theme.color },
                      ]}
                    />
                    <Text
                      style={[
                        styles.lineButtonText,
                        isSelected && styles.lineButtonTextActive,
                      ]}
                      numberOfLines={1}
                    >
                      {getRouteName(route)}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          )}
        </View>

        {error ? (
          <TouchableOpacity
            style={styles.errorCard}
            activeOpacity={0.85}
            onPress={() =>
              selectedRouteId ? loadRouteDetails(selectedRouteId) : loadRoutes()
            }
          >
            <Text style={styles.errorTitle}>Não foi possível carregar</Text>
            <Text style={styles.errorText}>{error}</Text>
            <Text style={styles.errorAction}>Toque para tentar novamente</Text>
          </TouchableOpacity>
        ) : null}

        <Text style={styles.sectionTitle}>Pontos</Text>

        {loadingDetails ? (
          <View style={styles.feedbackCard}>
            <ActivityIndicator color="#8FD8FF" size="large" />
            <Text style={styles.feedbackText}>Carregando horários...</Text>
          </View>
        ) : scheduleGroups.length ? (
          scheduleGroups.map((point, index) => (
            <View key={point.id_ponto || index} style={styles.stopCard}>
              <View style={styles.stopHeader}>
                <View
                  style={[
                    styles.stopMarker,
                    { backgroundColor: selectedTheme.color },
                  ]}
                >
                  <Text style={styles.stopMarkerText}>{index + 1}</Text>
                </View>

                <Text style={styles.stopName}>{point.nome_ponto}</Text>
              </View>

              {point.horarios.length ? (
                <View style={styles.timesList}>
                  {point.horarios.map((schedule, scheduleIndex) => {
                    const time = getScheduleTime(schedule);

                    return (
                      <Text
                        key={schedule.id_horario || `${point.id_ponto}-${scheduleIndex}`}
                        style={styles.timePill}
                      >
                        {String(time).slice(0, 5)}
                      </Text>
                    );
                  })}
                </View>
              ) : (
                <Text style={styles.emptyPointText}>
                  Nenhum horário cadastrado para este ponto.
                </Text>
              )}

            </View>
          ))
        ) : (
          <View style={styles.feedbackCard}>
            <Text style={styles.emptyText}>
              Nenhum ponto ou horário cadastrado para esta rota.
            </Text>
          </View>

        )}
      </ScrollView>

    </SafeAreaView>
  );
}
