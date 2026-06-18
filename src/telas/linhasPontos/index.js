import React, { useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

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

export default function LinhasPontos() {
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
  const routeName = selectedLine ? getRouteName(selectedLine) : '';
  const points = routeDetails?.pontos || [];

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
          <Text style={styles.headerTitle}>Linhas e pontos</Text>
        </View>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.summaryCard}>
          <View style={[styles.summaryIcon, { backgroundColor: selectedTheme.color }]}>
            <Text style={styles.summaryIconText}>
              {routeName ? routeName[0].toUpperCase() : '-'}
            </Text>
          </View>

          <View style={styles.summaryInfo}>
            <Text style={styles.summaryLabel}>Linha selecionada</Text>
            <Text style={styles.summaryTitle}>
              {routeName || 'Nenhuma linha selecionada'}
            </Text>
            <Text style={styles.summaryRoute}>
              {loadingDetails ? 'Carregando dados da linha...' : `${points.length} pontos cadastrados`}
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Escolha uma linha</Text>

        {loadingRoutes ? (
          <View style={styles.feedbackCard}>
            <ActivityIndicator color="#073D8F" size="large" />
            <Text style={styles.feedbackText}>Carregando linhas...</Text>
          </View>
        ) : error ? (
          <TouchableOpacity
            style={styles.errorCard}
            activeOpacity={0.85}
            onPress={() => (selectedRouteId ? loadRouteDetails(selectedRouteId) : loadRoutes())}
          >
            <Text style={styles.errorTitle}>Não foi possível carregar</Text>
            <Text style={styles.errorText}>{error}</Text>
            <Text style={styles.errorAction}>Toque para tentar novamente</Text>
          </TouchableOpacity>
        ) : routes.length === 0 ? (
          <View style={styles.descriptionCard}>
            <Text style={styles.descriptionText}>
              Nenhuma linha cadastrada no momento.
            </Text>
          </View>
        ) : (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.lineGrid}
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
                    isSelected && { backgroundColor: theme.color },
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

        <View style={styles.descriptionCard}>
          <Text style={styles.descriptionTitle}>Sobre o trajeto</Text>
          <Text style={styles.descriptionText}>
            {routeDetails?.descricao_rota ||
              routeDetails?.descricao ||
              'Os dados desta linha são carregados pela API.'}
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Pontos da linha</Text>

        <View style={styles.pointsCard}>
          {loadingDetails ? (
            <View style={styles.feedbackCard}>
              <ActivityIndicator color="#073D8F" size="large" />
              <Text style={styles.feedbackText}>Carregando pontos...</Text>
            </View>
          ) : points.length ? (
            points.map((point, index) => {
              const isLast = index === points.length - 1;

              return (
                <View
                  key={point.id_ponto || point.id_pontos || index}
                  style={styles.pointRow}
                >
                  <View style={styles.pointTrack}>
                    <View
                      style={[
                        styles.pointMarker,
                        { backgroundColor: selectedTheme.color },
                      ]}
                    >
                      <Text style={styles.pointMarkerText}>{index + 1}</Text>
                    </View>
                    {!isLast && <View style={styles.pointLine} />}
                  </View>

                  <View style={[styles.pointInfo, isLast && styles.pointInfoLast]}>
                    <Text style={styles.pointName}>
                      {point.nome_ponto || point.nome_pontos}
                    </Text>
                    {point.descricao_ponto || point.tipo_ponto || point.referencia ? (
                      <Text style={styles.pointHint}>
                        {point.descricao_ponto || point.tipo_ponto || point.referencia}
                      </Text>
                    ) : null}
                  </View>
                </View>
              );
            })
          ) : (
            <Text style={styles.descriptionText}>
              Nenhum ponto cadastrado para esta linha.
            </Text>
          )}
        </View>

        <TouchableOpacity
          style={styles.primaryButton}
          activeOpacity={0.86}
          onPress={() => navigation.navigate('Horarios')}
        >
          <Text style={styles.primaryButtonText}>Ver horários</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
