import { useCallback, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import styles from './styles';
import {
  buscarMediaAvaliacoes,
  buscarMotorista,
  listarAvaliacoesMotorista,
} from '../../services/avaliacoes';

function getDriverId(params) {
  return (
    params?.id_motorista ||
    params?.id ||
    params?.driver?.id_motorista ||
    params?.driver?.id ||
    null
  );
}

function getDriverName(driver) {
  return driver?.nome_motorista || driver?.nome || '';
}

function getReviewDate(value) {
  if (!value) {
    return 'Data não informada';
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return String(value);
  }

  return date.toLocaleDateString('pt-BR');
}

function sortReviews(reviews) {
  return [...reviews].sort((a, b) => {
    const firstDate = new Date(a.data_avaliacao).getTime();
    const secondDate = new Date(b.data_avaliacao).getTime();

    return (Number.isNaN(secondDate) ? 0 : secondDate) -
      (Number.isNaN(firstDate) ? 0 : firstDate);
  });
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

export default function AvaliacoesMotorista() {
  const navigation = useNavigation();
  const route = useRoute();
  const driverId = getDriverId(route.params);

  const [driver, setDriver] = useState(route.params?.driver || null);
  const [reviews, setReviews] = useState([]);
  const [average, setAverage] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadReviews = useCallback(async () => {
    if (!driverId) {
      setError('Motorista não informado.');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError('');

      const [driverData, reviewsData, averageData] = await Promise.all([
        buscarMotorista(driverId),
        listarAvaliacoesMotorista(driverId),
        buscarMediaAvaliacoes(driverId),
      ]);

      const orderedReviews = sortReviews(reviewsData);

      setDriver(driverData || null);
      setReviews(orderedReviews);
      setAverage(Number(averageData.media || 0));
      setTotalReviews(
        Number(averageData.quantidade || orderedReviews.length || 0),
      );
    } catch (loadError) {
      setError(loadError.message);
    } finally {
      setLoading(false);
    }
  }, [driverId]);

  useFocusEffect(
    useCallback(() => {
      loadReviews();
    }, [loadReviews]),
  );

  const driverName = getDriverName(driver);
  const averageLabel = Number(average || 0).toFixed(1);

  const renderReview = ({ item, index }) => (
    <View style={styles.reviewCard}>
      <View style={styles.reviewHeader}>
        <View style={styles.reviewTitleGroup}>
          <Text style={styles.reviewTitle}>Avaliação {index + 1}</Text>
          <Text style={styles.reviewDate}>
            {getReviewDate(item.data_avaliacao)}
          </Text>
        </View>

        <View style={styles.ratingPill}>
          <Text style={styles.ratingPillText}>
            {Number(item.nota_avaliacao || 0).toFixed(1)}
          </Text>
        </View>
      </View>

      <Stars rating={item.nota_avaliacao} />

      <Text style={styles.reviewText}>
        {item.comentario_avaliacao?.trim() || 'Sem comentário cadastrado.'}
      </Text>
    </View>
  );

  const listHeader = (
    <>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.85}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>

        <View style={styles.headerTextGroup}>
          <Text style={styles.brand}>OminiBus</Text>
          <Text style={styles.title}>Avaliações do motorista</Text>
          <Text style={styles.subtitle}>Veja os comentários enviados.</Text>
        </View>
      </View>

      <View style={styles.summaryCard}>
        <View style={styles.summaryScoreGroup}>
          <Text style={styles.summaryLabel}>Média geral</Text>
          <Text style={styles.summaryScore}>{averageLabel}</Text>
        </View>

        <View style={styles.summaryRight}>
          <Stars rating={average} size={22} />
          <Text style={styles.summaryCount}>
            {totalReviews} {totalReviews === 1 ? 'avaliação' : 'avaliações'}
          </Text>
          {driverName ? (
            <Text style={styles.driverName}>{driverName}</Text>
          ) : null}
        </View>
      </View>
    </>
  );

  return (
    <ImageBackground
      source={require('../../../assets/fundo.png')}
      resizeMode="cover"
      style={styles.background}
    >
      <LinearGradient
        colors={['rgba(3, 18, 45, 0.94)', 'rgba(7, 61, 143, 0.88)']}
        style={styles.overlay}
      >
        <SafeAreaView style={styles.screen}>
          {loading ? (
            <View style={styles.feedbackContainer}>
              <ActivityIndicator color="#FFFFFF" size="large" />
              <Text style={styles.feedbackText}>Carregando avaliações...</Text>
            </View>
          ) : error ? (
            <View style={styles.errorScreen}>
              {listHeader}
              <View style={styles.feedbackCard}>
                <Text style={styles.errorText}>{error}</Text>
                <TouchableOpacity
                  style={styles.retryButton}
                  activeOpacity={0.85}
                  onPress={loadReviews}
                >
                  <Text style={styles.retryButtonText}>Tentar novamente</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <FlatList
              data={reviews}
              keyExtractor={(item, index) =>
                String(item.id_avaliacao || `${driverId}-${index}`)
              }
              renderItem={renderReview}
              ListHeaderComponent={listHeader}
              contentContainerStyle={[
                styles.listContent,
                reviews.length === 0 && styles.emptyListContent,
              ]}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={
                <View style={styles.emptyCard}>
                  <Text style={styles.emptyTitle}>
                    Nenhuma avaliação encontrada para este motorista.
                  </Text>
                </View>
              }
            />
          )}
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
}
