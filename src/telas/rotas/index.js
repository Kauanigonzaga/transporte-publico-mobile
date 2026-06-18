import { useEffect, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  ActivityIndicator,
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

import styles from './styles';
import motoristaImage from '../../../assets/imgMotorista.png';
import { getAssetUrl } from '../../services/api';
import { buscarDetalhesRota, listarRotas } from '../../services/rotas';


const DEFAULT_ROUTE_COLOR = '#1769E0';
const DEFAULT_ROUTE_SOFT_COLOR = '#EAF2FF';

function getRouteName(route) {
  return (
    route?.nome_linhas ||
    route?.nome_rota ||
    route?.nome ||
    `Rota ${route?.id_rota || ''}`.trim()
  );
}

function getRouteId(route) {
  return route?.id_rota || route?.id || route?.idRota;
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

function groupSchedules(schedules) {
  return schedules.reduce((groups, schedule) => {
    const key = String(schedule.id_ponto || schedule.id_pontos || schedule.id);
    const current = groups.get(key) || {
      id_ponto: schedule.id_ponto || schedule.id_pontos || schedule.id,
      nome_ponto: schedule.nome_ponto || schedule.nome_pontos || '',
      horarios: [],
    };

    current.horarios.push(schedule);
    groups.set(key, current);
    return groups;
  }, new Map());
}

export default function RotasScreen() {
  const navigation = useNavigation();
  const [routes, setRoutes] = useState([]);
  const [selectedRouteId, setSelectedRouteId] = useState(null);
  const [routeDetails, setRouteDetails] = useState(null);
  const [selectedTab, setSelectedTab] = useState('pontos');
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

      const selectedRouteData = routes.find(
        (route) => Number(getRouteId(route)) === Number(routeId),
      );
      const details = await buscarDetalhesRota(routeId);

      setRouteDetails({
        ...selectedRouteData,
        ...details,
        pontos: details.pontos || [],
        horarios: details.horarios || [],
        motoristas: details.motoristas || [],
      });
    } catch (loadError) {
      setError(loadError.message);
    } finally {
      setLoadingDetails(false);
    }
  }

  const selectedRoute = useMemo(
    () =>
      routes.find((route) => Number(getRouteId(route)) === Number(selectedRouteId)) ||
      null,
    [routes, selectedRouteId],
  );
  const selectedTheme = routeTheme(routeDetails || selectedRoute);


  const mapUrl =
    routeDetails?.mapa_url ||
    routeDetails?.mapaUrl ||
    routeDetails?.mapa ||
    selectedRoute?.mapa_url ||
    selectedRoute?.mapaUrl ||
    selectedRoute?.mapa ||
    '';
  const scheduleGroups = useMemo(
    () => Array.from(groupSchedules(routeDetails?.horarios || []).values()),
    [routeDetails],
  );

  function selectRoute(routeId) {
    setSelectedRouteId(routeId);
    setSelectedTab('pontos');
  }

  function openDriver(driver, screen) {
    navigation.navigate(screen, {
      id_motorista: driver.id_motorista || driver.id,
      driver,
      routeName: getRouteName(routeDetails),
    });
  }

  function goHome() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  }

  function renderPanelContent() {
    if (loadingDetails) {
      return (
        <View style={styles.feedback}>
          <ActivityIndicator color="#FFFFFF" size="large" />
          <Text style={styles.feedbackText}>Carregando dados da rota...</Text>
        </View>
      );
    }

    if (!routeDetails) {
      return (
        <Text style={styles.emptyText}>
          Selecione uma rota para consultar os dados.
        </Text>
      );
    }

    if (selectedTab === 'pontos') {
      return routeDetails.pontos?.length ? (
        routeDetails.pontos.map((point, index) => (
          <View key={point.id_ponto || point.id_pontos || index} style={styles.dataRow}>
            <View style={styles.dataIndex}>
              <Text style={styles.dataIndexText}>{index + 1}</Text>
            </View>
            <View style={styles.dataCopy}>
              <Text style={styles.dataTitle}>
                {point.nome_ponto || point.nome_pontos}
              </Text>
              {point.descricao_ponto || point.tipo_ponto || point.referencia ? (
                <Text style={styles.dataDescription}>
                  {point.descricao_ponto || point.tipo_ponto || point.referencia}
                </Text>
              ) : null}
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.emptyText}>Nenhum ponto cadastrado nesta rota.</Text>
      );
    }

    if (selectedTab === 'horarios') {
      return scheduleGroups.length ? (
        scheduleGroups.map((point) => (
          <View key={point.id_ponto} style={styles.scheduleCard}>
            <Text style={styles.schedulePoint}>{point.nome_ponto}</Text>
            <View style={styles.scheduleTimes}>
              {point.horarios.map((schedule) => (
                <View
                  key={schedule.id_horario || schedule.id || schedule.passagem_horarios}
                  style={styles.timePill}
                >
                  <Text style={styles.timeText}>
                    {schedule.hora || schedule.passagem_horarios}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.emptyText}>Nenhum horário cadastrado nesta rota.</Text>
      );
    }

    return routeDetails.motoristas?.length ? (
      routeDetails.motoristas.map((driver) => {
        const driverId = driver.id_motorista || driver.id;
        const photoUrl = getAssetUrl(driver.foto_motorista || driver.foto);

        return (
          <View key={driverId} style={styles.driverCard}>
            <Image
              source={photoUrl ? { uri: photoUrl } : motoristaImage}
              style={styles.avatar}
            />

            <View style={styles.driverInfo}>
              <Text style={styles.driverName}>
                {driver.nome_motorista || driver.nome}
              </Text>
              {driverId ? (
                <Text style={styles.driverCode}>Motorista #{driverId}</Text>
              ) : null}
              {driver.status ? (
                <View style={styles.statusPill}>
                  <Text style={styles.statusText}>{driver.status}</Text>
                </View>
              ) : null}
              {driver.media_avaliacao ? (
                <Text style={styles.driverRating}>
                  Nota media: {Number(driver.media_avaliacao).toFixed(1)}
                </Text>
              ) : null}
            </View>

            <View style={styles.driverActions}>
              <TouchableOpacity
                style={styles.driverPrimaryButton}
                activeOpacity={0.85}
                onPress={() => openDriver(driver, 'InfoMotorista')}
              >
                <Text style={styles.driverPrimaryText}>Avaliar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.driverSecondaryButton}
                activeOpacity={0.85}
                onPress={() => openDriver(driver, 'AvaliacoesMotorista')}
              >
                <Text style={styles.driverSecondaryText}>Ver avaliações</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })
    ) : (
      <Text style={styles.emptyText}>
        Nenhum motorista vinculado a esta rota.
      </Text>
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.headerCopy}>
          <Text style={styles.brand}>OminiBus</Text>
          <Text style={styles.headerTitle}>Escolha sua rota</Text>
        </View>

        <TouchableOpacity
          style={styles.homeButton}
          activeOpacity={0.85}
          onPress={goHome}
        >
          <Text style={styles.homeButtonText}>Home</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.routesCard}>
          <Text style={styles.sectionTitle}>Rotas disponíveis</Text>

        {loadingRoutes ? (
          <ActivityIndicator color="#8FD8FF" size="large" />
        ) : routes.length === 0 ? (
          <Text style={styles.routesEmptyText}>
            Nenhuma rota cadastrada no momento.
          </Text>
        ) : (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.routesList}
          >
            {routes.map((route) => {
              const routeId = getRouteId(route);
              const isSelected = Number(routeId) === Number(selectedRouteId);
              const theme = routeTheme(route);

              return (
                <TouchableOpacity
                  key={routeId}
                  style={[
                    styles.routeButton,
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
                      styles.routeDot,
                      { backgroundColor: isSelected ? '#FFFFFF' : theme.color },
                    ]}
                  />
                  <Text
                    style={[
                      styles.routeButtonText,
                      isSelected && styles.routeButtonTextActive,
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

        <View style={[styles.mapCard, { borderColor: selectedTheme.color }]}>
          <View style={styles.mapHeader}>
            <View style={styles.mapHeaderCopy}>
              <Text style={styles.mapEyebrow}>Mapa da rota</Text>
              <Text style={styles.mapTitle} numberOfLines={1}>
                {routeDetails ? getRouteName(routeDetails) : 'Selecione uma rota'}
              </Text>
            </View>
            {loadingDetails ? (
              <ActivityIndicator color="#8FD8FF" />
            ) : null}
          </View>

          <View style={styles.mapContainer}>
            {mapUrl ? (
              <>
                <WebView
                  key={mapUrl}
                  source={{ uri: mapUrl }}
                  style={styles.map}
                  startInLoadingState
                />
                <View pointerEvents="none" style={styles.mapGlassOverlay} />
                <TouchableOpacity
                  style={styles.mapButton}
                  activeOpacity={0.86}
                  onPress={() => Linking.openURL(mapUrl)}
                >
                  <View style={styles.mapPin} />
                  <Text style={styles.mapButtonText}>Ver mapa</Text>
                </TouchableOpacity>
              </>
            ) : (
              <View style={styles.mapEmpty}>
                <Text style={styles.mapEmptyText}>
                  Mapa não cadastrado para esta rota.
                </Text>
              </View>
            )}
          </View>
        </View>

        <View style={styles.dataPanel}>
          <View style={styles.panelTabs}>
            {[
              ['pontos', 'PONTOS'],
              ['horarios', 'HORÁRIOS'],
              ['motoristas', 'MOTORISTA'],
            ].map(([tab, label]) => (
              <TouchableOpacity
                key={tab}
                style={[
                  styles.panelTab,
                  selectedTab === tab && styles.panelTabActive,
                ]}
                activeOpacity={0.85}
                onPress={() => setSelectedTab(tab)}
              >
                <Text
                  style={[
                    styles.panelTabText,
                    selectedTab === tab && styles.panelTabTextActive,
                  ]}
                >
                  {label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.panelHeader}>
            <Text style={styles.panelTitle}>
              {selectedTab === 'pontos'
                ? 'Pontos da rota'
                : selectedTab === 'horarios'
                  ? 'Horários da rota'
                  : 'Motoristas da rota'}
            </Text>
            <Text style={styles.panelRouteName}>
              {routeDetails ? getRouteName(routeDetails) : 'Selecione uma rota'}
            </Text>
          </View>

          <View style={styles.panelContent}>{renderPanelContent()}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
