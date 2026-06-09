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
import { get, getAssetUrl } from '../../services/api';

const MAPS = {
  ROXA: {
    color: '#7C3AED',
    softColor: '#EDE9FE',
    url: 'https://www.google.com/maps/d/embed?mid=1EifQjeD8Cx_JHRKUjpf0wx2JezX3bxw&ehbc=2E312F',
  },
  AZUL: {
    color: '#2563EB',
    softColor: '#DBEAFE',
    url: 'https://www.google.com/maps/d/embed?mid=1PZnUg7Xd-2Y_LuZgKu0I8XBxSUJqOGg&ehbc=2E312F',
  },
  LARANJA: {
    color: '#EA580C',
    softColor: '#FFEDD5',
    url: 'https://www.google.com/maps/d/embed?mid=1bUGpvBgmP-nTU3OPTjyh48C8-2XWEt4&ehbc=2E312F',
  },
  AMARELA: {
    color: '#EAB308',
    softColor: '#FEF3C7',
    url: 'https://www.google.com/maps/d/embed?mid=1oHTQrYTHxzncd8IdKuHOWY9z0damzVE&ehbc=2E312F',
  },
};

const FALLBACK_COLORS = [
  { color: '#1D4ED8', softColor: '#DBEAFE' },
  { color: '#7C3AED', softColor: '#EDE9FE' },
  { color: '#EAB308', softColor: '#FEF3C7' },
  { color: '#F97316', softColor: '#FFEDD5' },
];

function routeTheme(route, index = 0) {
  const name = String(route?.nome_linhas || route?.nome_rota || '')
    .trim()
    .toUpperCase();

  return MAPS[name] || FALLBACK_COLORS[index % FALLBACK_COLORS.length];
}

function normalizeRoutes(items) {
  const seen = new Set();

  return items.filter((route) => {
    const id = Number(route.id_rota);

    if (!Number.isFinite(id) || seen.has(id)) {
      return false;
    }

    seen.add(id);
    return true;
  });
}

function groupSchedules(schedules) {
  return schedules.reduce((groups, schedule) => {
    const key = String(schedule.id_ponto);
    const current = groups.get(key) || {
      id_ponto: schedule.id_ponto,
      nome_ponto: schedule.nome_ponto,
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

      const response = await get('/rotas');
      const loadedRoutes = normalizeRoutes(response.dados || []);

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

      const response = await get(`/rotas/${routeId}/detalhes`);
      setRouteDetails(response.dados || null);
    } catch (loadError) {
      setError(loadError.message);
    } finally {
      setLoadingDetails(false);
    }
  }

  const selectedRoute = useMemo(
    () =>
      routes.find((route) => Number(route.id_rota) === Number(selectedRouteId)) ||
      null,
    [routes, selectedRouteId],
  );

  const selectedTheme = routeTheme(
    selectedRoute,
    Math.max(
      routes.findIndex(
        (route) => Number(route.id_rota) === Number(selectedRouteId),
      ),
      0,
    ),
  );

  const mapUrl = selectedRoute?.mapa || selectedTheme.url;
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
      id_motorista: driver.id_motorista,
      driver,
      routeName: routeDetails?.nome_rota,
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
          <View key={point.id_ponto} style={styles.dataRow}>
            <View style={styles.dataIndex}>
              <Text style={styles.dataIndexText}>{index + 1}</Text>
            </View>
            <View style={styles.dataCopy}>
              <Text style={styles.dataTitle}>{point.nome_ponto}</Text>
              <Text style={styles.dataDescription}>
                {index === 0
                  ? 'Ponto inicial'
                  : index === routeDetails.pontos.length - 1
                    ? 'Ponto final'
                    : 'Parada da rota'}
              </Text>
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
                <View key={schedule.id_horario} style={styles.timePill}>
                  <Text style={styles.timeText}>{schedule.hora}</Text>
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
        const photoUrl = getAssetUrl(driver.foto);

        return (
          <View key={driver.id_motorista} style={styles.driverCard}>
            <Image
              source={photoUrl ? { uri: photoUrl } : motoristaImage}
              style={styles.avatar}
            />

            <View style={styles.driverInfo}>
              <Text style={styles.driverName}>{driver.nome}</Text>
              <Text style={styles.driverCode}>
                Motorista #{driver.id_motorista}
              </Text>
              {driver.status ? (
                <View style={styles.statusPill}>
                  <Text style={styles.statusText}>{driver.status}</Text>
                </View>
              ) : null}
              <Text style={styles.driverRating}>
                Nota média: {Number(driver.media_avaliacao || 0).toFixed(1)}
              </Text>
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
          <Text style={styles.brand}>BUSLY</Text>
          <Text style={styles.headerTitle}>Escolha sua rota</Text>
        </View>

        <TouchableOpacity
          style={styles.homeButton}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.homeButtonText}>Home</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>Rotas disponíveis</Text>

        {loadingRoutes ? (
          <ActivityIndicator color="#073D8F" size="large" />
        ) : (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.routesList}
          >
            {routes.map((route, index) => {
              const isSelected =
                Number(route.id_rota) === Number(selectedRouteId);
              const theme = routeTheme(route, index);

              return (
                <TouchableOpacity
                  key={route.id_rota}
                  style={[
                    styles.routeButton,
                    { backgroundColor: theme.softColor },
                    isSelected && { backgroundColor: theme.color },
                  ]}
                  activeOpacity={0.86}
                  onPress={() => selectRoute(route.id_rota)}
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
                  >
                    {route.nome_linhas || `Rota ${route.id_rota}`}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        )}

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

        <View style={styles.mapCard}>
          <Text style={styles.mapTitle}>
            Mapa {routeDetails?.nome_rota ? `- ${routeDetails.nome_rota}` : ''}
          </Text>

          <View style={styles.mapContainer}>
            {mapUrl ? (
              <>
                <WebView
                  key={mapUrl}
                  source={{ uri: mapUrl }}
                  style={styles.map}
                  startInLoadingState
                />
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
              {routeDetails?.nome_rota || 'Selecione uma rota'}
            </Text>
          </View>

          <View style={styles.panelContent}>{renderPanelContent()}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
