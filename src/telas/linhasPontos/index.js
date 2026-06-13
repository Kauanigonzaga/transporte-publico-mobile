import { useEffect, useMemo, useState } from 'react';
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

function routeTheme(route, index) {
  if (route?.cor || route?.color) {
    return {
      color: route.cor || route.color,
      softColor: route.cor_suave || route.softColor || route.cor_clara || '#DBEAFE',
    };
  }

  return ROUTE_THEMES[index % ROUTE_THEMES.length];
}

function normalizeLine(route, details, index) {
  const theme = routeTheme(route, index);
  const points = (details?.pontos || []).map((point) => ({
    id: point.id_ponto || point.id || point.nome_ponto || point.nome_pontos,
    name: point.nome_ponto || point.nome_pontos || 'Ponto sem nome',
  }));
  const origin =
    details?.origem ||
    route?.origem ||
    points[0]?.name ||
    'Origem não informada';
  const destination =
    details?.destino ||
    route?.destino ||
    points[points.length - 1]?.name ||
    'Destino não informado';

  return {
    id: route.id_rota,
    name: getRouteName(route),
    color: theme.color,
    softColor: theme.softColor,
    origin,
    destination,
    description:
      details?.descricao ||
      route?.descricao ||
      `Linha ${getRouteName(route)} de ${origin} até ${destination}.`,
    points,
  };
}

export default function LinhasPontos() {
  const navigation = useNavigation();
  const [lines, setLines] = useState([]);
  const [selectedLineId, setSelectedLineId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadLines();
  }, []);

  async function loadLines() {
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

      {loading ? (
        <View style={styles.feedback}>
          <ActivityIndicator color="#073D8F" size="large" />
          <Text style={styles.feedbackText}>Carregando linhas e pontos...</Text>
        </View>
      ) : error ? (
        <View style={styles.feedback}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={loadLines}>
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
          <View style={styles.summaryCard}>
            <View style={[styles.summaryIcon, { backgroundColor: selectedLine.color }]}>
              <Text style={styles.summaryIconText}>{selectedLine.name[0]}</Text>
            </View>

            <View style={styles.summaryInfo}>
              <Text style={styles.summaryLabel}>Linha selecionada</Text>
              <Text style={styles.summaryTitle}>Linha {selectedLine.name}</Text>
              <Text style={styles.summaryRoute}>
                {selectedLine.origin} {'>'} {selectedLine.destination}
              </Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Escolha uma linha</Text>

          <View style={styles.lineGrid}>
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
          </View>

          <View style={styles.descriptionCard}>
            <Text style={styles.descriptionTitle}>Sobre o trajeto</Text>
            <Text style={styles.descriptionText}>{selectedLine.description}</Text>
          </View>

          <Text style={styles.sectionTitle}>Pontos da linha</Text>

          <View style={styles.pointsCard}>
            {selectedLine.points.length ? (
              selectedLine.points.map((point, index) => {
                const isLast = index === selectedLine.points.length - 1;

                return (
                  <View key={point.id || point.name} style={styles.pointRow}>
                    <View style={styles.pointTrack}>
                      <View
                        style={[
                          styles.pointMarker,
                          { backgroundColor: selectedLine.color },
                        ]}
                      >
                        <Text style={styles.pointMarkerText}>{index + 1}</Text>
                      </View>
                      {!isLast && <View style={styles.pointLine} />}
                    </View>

                    <View style={[styles.pointInfo, isLast && styles.pointInfoLast]}>
                      <Text style={styles.pointName}>{point.name}</Text>
                      <Text style={styles.pointHint}>
                        {index === 0
                          ? 'Ponto inicial'
                          : isLast
                            ? 'Ponto final'
                            : 'Parada intermediária'}
                      </Text>
                    </View>
                  </View>
                );
              })
            ) : (
              <Text style={styles.emptyText}>Nenhum ponto cadastrado nesta linha.</Text>
            )}
          </View>

          <TouchableOpacity
            style={styles.primaryButton}
            activeOpacity={0.86}
            onPress={() => navigation.navigate('Horarios', { routeId: selectedLine.id })}
          >
            <Text style={styles.primaryButtonText}>Ver horários desta linha</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
