import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  Image,
  LayoutAnimation,
  Platform,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';
import motoristaImage from '../../../assets/imgMotorista.png';
import { get, getAssetUrl } from '../../services/api';
import { buscarDetalhesRota } from '../../services/rotas';


if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

function getInitials(name) {
  return String(name || '?')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');
}

function getRouteCode(name) {
  const words = String(name || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (words.length > 1) {
    return words
      .slice(0, 2)
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  }

  return words[0]?.slice(0, 2).toUpperCase() || '--';
}

function normalizeRouteName(route) {
  return route?.nome_rota || route?.nome_linhas || route?.nome_linha || '';
}

function routeMap(route) {
  return route?.mapa_url || route?.mapaUrl || route?.mapa || '';

}

function nextSchedule(schedules = []) {
  const times = schedules
    .map((schedule) => schedule.hora || schedule.passagem_horarios)
    .filter(Boolean)
    .map((time) => String(time).slice(0, 5))
    .sort();

  if (!times.length) {
    return 'Não informado';
  }

  const now = new Date();
  const current = `${String(now.getHours()).padStart(2, '0')}:${String(
    now.getMinutes(),
  ).padStart(2, '0')}`;

  return times.find((time) => time >= current) || times[0];
}

function formatDate(value) {
  if (!value) {
    return 'Data não informada';
  }

  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? String(value)
    : date.toLocaleDateString('pt-BR');
}

function Stars({ rating, size = 19 }) {
  const roundedRating = Math.round(Number(rating || 0));

  return (
    <View style={styles.starsRow}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Text
          key={star}
          style={[
            styles.star,
            { fontSize: size },
            star <= roundedRating ? styles.starActive : styles.starInactive,
          ]}
        >
          ★
        </Text>
      ))}
    </View>
  );
}

export default function HomeMotorista() {
  const navigation = useNavigation();
  const route = useRoute();
  const driverId =
    route.params?.id_motorista ||
    route.params?.id ||
    route.params?.driver?.id_motorista ||
    null;

  const [driver, setDriver] = useState(route.params?.driver || null);
  const [routes, setRoutes] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [apiAverage, setApiAverage] = useState(0);
  const [activeTab, setActiveTab] = useState('routes');
  const [expandedRouteId, setExpandedRouteId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState('');
  const entrance = useRef(new Animated.Value(0)).current;

  const loadData = useCallback(
    async (isRefresh = false) => {
      if (!driverId) {
        setError('ID do motorista não informado.');
        setLoading(false);
        return;
      }

      try {
        isRefresh ? setRefreshing(true) : setLoading(true);
        setError('');

        const [driverResponse, routesResponse, reviewsResponse, averageResponse] =
          await Promise.all([
            get(`/motoristas/${driverId}`),
            get(`/motoristas/${driverId}/rotas`),
            get(`/avaliacao/${driverId}`),
            get(`/mediaAvaliacao/${driverId}`).catch(() => ({ media: 0 })),
          ]);

        const routeItems = routesResponse.dados?.rotas || [];
        const detailedRoutes = await Promise.all(
          routeItems.map(async (item) => {
            try {
              const details = await buscarDetalhesRota(item.id_rota);
              return { ...item, ...details };
            } catch {
              return item;
            }
          }),
        );

        setDriver(driverResponse.dados || routesResponse.dados || null);
        setRoutes(detailedRoutes);
        setReviews(reviewsResponse.dados || []);
        setApiAverage(
          averageResponse.media ?? averageResponse.dados?.media ?? 0,
        );
      } catch (loadError) {
        setError(loadError.message);
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    [driverId],
  );

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    if (!loading && !error) {
      Animated.timing(entrance, {
        toValue: 1,
        duration: 420,
        useNativeDriver: true,
      }).start();
    }
  }, [entrance, error, loading]);

  const average = useMemo(() => {
    if (Number(apiAverage) > 0) {
      return Number(apiAverage).toFixed(1);
    }

    if (!reviews.length) {
      return '0.0';
    }

    const total = reviews.reduce(
      (sum, review) => sum + Number(review.nota_avaliacao || 0),
      0,
    );
    return (total / reviews.length).toFixed(1);
  }, [apiAverage, reviews]);

  const driverName =
    driver?.nome_motorista || driver?.nome || 'Motorista';
  const photoUrl = getAssetUrl(driver?.foto_motorista || driver?.foto);

  function changeTab(tab) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setActiveTab(tab);
  }

  function toggleRoute(routeId) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedRouteId((current) =>
      Number(current) === Number(routeId) ? null : routeId,
    );
  }

  function logout() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  }

  if (loading) {
    return (
      <LinearGradient
        colors={['#06142E', '#0B2F7A', '#1264E8']}
        style={styles.centeredScreen}
      >
        <ActivityIndicator color="#FFFFFF" size="large" />
        <Text style={styles.loadingText}>Carregando seu painel...</Text>
      </LinearGradient>
    );
  }

  if (error && !driver) {
    return (
      <LinearGradient
        colors={['#06142E', '#0B2F7A', '#1264E8']}
        style={styles.centeredScreen}
      >
        <Text style={styles.errorTitle}>Não foi possível carregar</Text>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={() => loadData()}>
          <Text style={styles.retryButtonText}>Tentar novamente</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backLink} onPress={logout}>
          <Text style={styles.backLinkText}>Voltar ao início</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
      colors={['#06142E', '#0B2F7A', '#1264E8']}
      locations={[0, 0.55, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.screen}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => loadData(true)}
              tintColor="#FFFFFF"
              colors={['#2F7CFF']}
            />
          }
          contentContainerStyle={styles.content}
        >
          <Animated.View
            style={[
              styles.animatedContent,
              {
                opacity: entrance,
                transform: [
                  {
                    translateY: entrance.interpolate({
                      inputRange: [0, 1],
                      outputRange: [16, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <View style={styles.headerCard}>
              <View style={styles.profileRow}>
                {photoUrl ? (
                  <Image source={{ uri: photoUrl }} style={styles.avatar} />
                ) : driverName !== 'Motorista' ? (
                  <LinearGradient
                    colors={['#2F7CFF', '#0057D9']}
                    style={styles.avatarFallback}
                  >
                    <Text style={styles.avatarInitials}>
                      {getInitials(driverName)}
                    </Text>
                  </LinearGradient>
                ) : (
                  <Image source={motoristaImage} style={styles.avatar} />
                )}

                <View style={styles.profileCopy}>
                  <Text style={styles.welcome}>BEM-VINDO DE VOLTA</Text>
                  <Text style={styles.driverName}>{driverName}</Text>
                  <View style={styles.idTag}>
                    <Text style={styles.idTagText}>ID #{driverId}</Text>
                  </View>
                </View>
              </View>

              <View style={styles.statsRow}>
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>{routes.length}</Text>
                  <Text style={styles.statLabel}>ROTAS</Text>
                </View>
                <View style={styles.statDivider} />
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>{average}</Text>
                  <Text style={styles.statLabel}>MÉDIA</Text>
                </View>
                <View style={styles.statDivider} />
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>{reviews.length}</Text>
                  <Text style={styles.statLabel}>AVALIAÇÕES</Text>
                </View>
              </View>

              <TouchableOpacity
                activeOpacity={0.85}
                onPress={logout}
                style={styles.logoutButton}
              >
                <LinearGradient
                  colors={['#2F7CFF', '#0057D9']}
                  style={styles.logoutGradient}
                >
                  <Text style={styles.logoutText}>Sair</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

            <View style={styles.tabs}>
              <TouchableOpacity
                activeOpacity={0.85}
                style={[
                  styles.tab,
                  activeTab === 'routes' && styles.tabActive,
                ]}
                onPress={() => changeTab('routes')}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === 'routes' && styles.tabTextActive,
                  ]}
                >
                  Minhas Rotas
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.85}
                style={[
                  styles.tab,
                  activeTab === 'reviews' && styles.tabActive,
                ]}
                onPress={() => changeTab('reviews')}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === 'reviews' && styles.tabTextActive,
                  ]}
                >
                  Avaliações
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.panel}>
              {error ? (
                <TouchableOpacity
                  style={styles.inlineError}
                  onPress={() => loadData()}
                >
                  <Text style={styles.inlineErrorText}>
                    {error} Toque para tentar novamente.
                  </Text>
                </TouchableOpacity>
              ) : null}

              {activeTab === 'routes' ? (
                routes.length ? (
                  routes.map((item) => {
                    const isExpanded =
                      Number(expandedRouteId) === Number(item.id_rota);
                    const points = item.pontos || [];
                    const schedules = item.horarios || [];
                    const origin =
                      item.origem || points[0]?.nome_ponto || 'Não informado';
                    const destination =
                      item.destino ||
                      points[points.length - 1]?.nome_ponto ||
                      'Não informado';
                    const mapUrl = routeMap(item);

                    return (
                      <View key={item.id_rota} style={styles.routeCard}>
                        <TouchableOpacity
                          activeOpacity={0.88}
                          onPress={() => toggleRoute(item.id_rota)}
                          style={styles.routePressable}
                        >
                          <LinearGradient
                            colors={['#2F7CFF', '#0057D9']}
                            style={styles.routeCode}
                          >
                            <Text style={styles.routeCodeText}>
                              {getRouteCode(normalizeRouteName(item))}
                            </Text>
                          </LinearGradient>

                          <View style={styles.routeInfo}>
                            <View style={styles.routeTitleRow}>
                              <Text style={styles.routeName}>
                                Rota {normalizeRouteName(item) || item.id_rota}
                              </Text>
                              <Text style={styles.expandIcon}>
                                {isExpanded ? '−' : '+'}
                              </Text>
                            </View>

                            <View style={styles.journeyRow}>
                              <Text style={styles.journeyText}>{origin}</Text>
                              <Text style={styles.journeyArrow}>→</Text>
                              <Text style={styles.journeyText}>
                                {destination}
                              </Text>
                            </View>

                            <View style={styles.routeMetaRow}>
                              <View style={styles.metaPill}>
                                <Text style={styles.metaText}>
                                  {item.quantidade_pontos || points.length} pontos
                                </Text>
                              </View>
                              <View style={styles.metaPill}>
                                <Text style={styles.metaText}>
                                  Próximo: {nextSchedule(schedules)}
                                </Text>
                              </View>
                            </View>

                            <View style={styles.activeBadge}>
                              <Text style={styles.activeBadgeText}>
                                {String(item.status || 'Ativa').toUpperCase()}
                              </Text>
                            </View>
                          </View>
                        </TouchableOpacity>

                        {isExpanded ? (
                          <View style={styles.routeDetails}>
                            <Text style={styles.detailTitle}>Horários da rota</Text>
                            <View style={styles.timesWrap}>
                              {schedules.length ? (
                                [...new Set(
                                  schedules.map((schedule) =>
                                    String(
                                      schedule.hora ||
                                        schedule.passagem_horarios,
                                    ).slice(0, 5),
                                  ),
                                )].map((time) => (
                                  <View key={time} style={styles.timePill}>
                                    <Text style={styles.timeText}>{time}</Text>
                                  </View>
                                ))
                              ) : (
                                <Text style={styles.emptyDetail}>
                                  Nenhum horário cadastrado.
                                </Text>
                              )}
                            </View>

                            <Text style={styles.detailTitle}>Pontos da rota</Text>
                            {points.length ? (
                              points.map((point, index) => (
                                <View
                                  key={point.id_ponto || index}
                                  style={styles.pointRow}
                                >
                                  <View style={styles.pointIndex}>
                                    <Text style={styles.pointIndexText}>
                                      {index + 1}
                                    </Text>
                                  </View>
                                  <Text style={styles.pointName}>
                                    {point.nome_ponto || point.nome_pontos}
                                  </Text>
                                </View>
                              ))
                            ) : (
                              <Text style={styles.emptyDetail}>
                                Nenhum ponto cadastrado.
                              </Text>
                            )}

                            <Text style={styles.detailTitle}>Mapa da rota</Text>
                            {mapUrl ? (
                              <View style={styles.mapContainer}>
                                <WebView
                                  source={{ uri: mapUrl }}
                                  style={styles.map}
                                  startInLoadingState
                                />
                              </View>
                            ) : (
                              <Text style={styles.emptyDetail}>
                                Mapa não disponível para esta rota.
                              </Text>
                            )}
                          </View>
                        ) : null}
                      </View>
                    );
                  })
                ) : (
                  <View style={styles.emptyState}>
                    <Text style={styles.emptyStateTitle}>Nenhuma rota</Text>
                    <Text style={styles.emptyStateText}>
                      Não há rotas vinculadas a este motorista no momento.
                    </Text>
                  </View>
                )
              ) : (
                <>
                  <View style={styles.reviewSummary}>
                    <Text style={styles.averageValue}>{average}</Text>
                    <Stars rating={average} size={25} />
                    <Text style={styles.averageCaption}>
                      Baseado em {reviews.length}{' '}
                      {reviews.length === 1 ? 'avaliação' : 'avaliações'}
                    </Text>
                  </View>

                  {reviews.length ? (
                    reviews.map((review) => (
                      <View
                        key={review.id_avaliacao}
                        style={styles.reviewCard}
                      >
                        <View style={styles.reviewHeader}>
                          <Stars rating={review.nota_avaliacao} />
                          <Text style={styles.reviewScore}>
                            {Number(review.nota_avaliacao || 0).toFixed(1)}
                          </Text>
                        </View>
                        <Text style={styles.reviewComment}>
                          {review.comentario_avaliacao?.trim() ||
                            'Avaliação enviada sem comentário.'}
                        </Text>
                        <Text style={styles.reviewDate}>
                          {formatDate(review.data_avaliacao)}
                        </Text>
                      </View>
                    ))
                  ) : (
                    <View style={styles.emptyState}>
                      <Text style={styles.emptyStateTitle}>
                        Nenhuma avaliação
                      </Text>
                      <Text style={styles.emptyStateText}>
                        As avaliações recebidas aparecerão aqui.
                      </Text>
                    </View>
                  )}
                </>
              )}
            </View>
          </Animated.View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
