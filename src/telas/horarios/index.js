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
import { get } from '../../services/api';

const ROUTE_THEMES = [
  { color: '#1D4ED8', softColor: '#DBEAFE' },
  { color: '#7C3AED', softColor: '#EDE9FE' },
  { color: '#EAB308', softColor: '#FEF3C7' },
  { color: '#F97316', softColor: '#FFEDD5' },
];

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
  const route = useRoute();
  const [lines, setLines] = useState([]);
  const [selectedLineId, setSelectedLineId] = useState(route.params?.routeId || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadSchedules();
  }, []);

  async function loadSchedules() {
    try {
      setLoading(true);
      setError('');

      const routesResponse = await get('/rotas');
      const routes = routesResponse.dados || [];
      const linesFromApi = await Promise.all(
        routes.map(async (item, index) => {
          const detailsResponse = await get(`/rotas/${item.id_rota}/detalhes`);
          return normalizeLine(item, detailsResponse.dados || {}, index);
        }),
      );

      setLines(linesFromApi);
      setSelectedLineId((currentId) => currentId || linesFromApi[0]?.id || null);
    } catch (loadError) {
      setError(loadError.message);
    } finally {
      setLoading(false);
    }
  }

  function goHome() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  }

  const selectedLine = useMemo(
    () => lines.find((line) => Number(line.id) === Number(selectedLineId)) || lines[0],
    [lines, selectedLineId],
  );

  const allTimes = selectedLine?.points.flatMap((point) => point.times) || [];
  const nextTime = [...allTimes].sort()[0] || '--:--';

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

      {loading ? (
        <View style={styles.feedback}>
          <ActivityIndicator color="#073D8F" size="large" />
          <Text style={styles.feedbackText}>Carregando horários...</Text>
        </View>
      ) : error ? (
        <View style={styles.feedback}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={loadSchedules}>
            <Text style={styles.retryButtonText}>Tentar novamente</Text>
          </TouchableOpacity>
        </View>
      ) : !selectedLine ? (
        <View style={styles.feedback}>
          <Text style={styles.feedbackText}>Nenhuma rota cadastrada.</Text>
        </View>
      ) : (
        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.nextCard}>
            <View>
              <Text style={styles.nextLabel}>Próxima saída</Text>
              <Text style={styles.nextTime}>{nextTime}</Text>
            </View>

            <View style={[styles.lineBadge, { backgroundColor: selectedLine.color }]}>
              <Text style={styles.lineBadgeText}>{selectedLine.name}</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Escolha a linha</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.lineSelector}
          >
            {lines.map((line) => {
              const isSelected = Number(line.id) === Number(selectedLine.id);

              return (
                <TouchableOpacity
                  key={line.id}
                  style={[
                    styles.lineButton,
                    { backgroundColor: line.softColor },
                    isSelected && { backgroundColor: line.color },
                  ]}
                  activeOpacity={0.86}
                  onPress={() => setSelectedLineId(line.id)}
                >
                  <View
                    style={[
                      styles.lineDot,
                      { backgroundColor: isSelected ? '#FFFFFF' : line.color },
                    ]}
                  />
                  <Text
                    style={[
                      styles.lineButtonText,
                      isSelected && styles.lineButtonTextActive,
                    ]}
                  >
                    {line.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <View style={styles.routeCard}>
            <Text style={styles.routeLabel}>Trajeto</Text>
            <Text style={styles.routeTitle}>
              {selectedLine.origin} {'>'} {selectedLine.destination}
            </Text>
          </View>

          <Text style={styles.sectionTitle}>Pontos e horários</Text>

          {selectedLine.points.length ? (
            selectedLine.points.map((point, index) => (
              <View key={point.id || point.name} style={styles.stopCard}>
                <View style={styles.stopHeader}>
                  <View
                    style={[
                      styles.stopMarker,
                      { backgroundColor: selectedLine.color },
                    ]}
                  >
                    <Text style={styles.stopMarkerText}>{index + 1}</Text>
                  </View>

                  <View style={styles.stopInfo}>
                    <Text style={styles.stopName}>{point.name}</Text>
                    <Text style={styles.stopHint}>
                      {point.times.length} horários hoje
                    </Text>
                  </View>
                </View>

                <View style={styles.timesList}>
                  {point.times.length ? (
                    point.times.map((time, timeIndex) => (
                      <Text
                        key={`${point.id}-${time}-${timeIndex}`}
                        style={styles.timePill}
                      >
                        {time}
                      </Text>
                    ))
                  ) : (
                    <Text style={styles.emptyText}>Sem horários cadastrados.</Text>
                  )}
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.emptyText}>Nenhum ponto cadastrado nesta rota.</Text>
          )}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
