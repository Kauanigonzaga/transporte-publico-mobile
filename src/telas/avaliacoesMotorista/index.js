import { useCallback, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import styles from './styles';
import { get } from '../../services/api';

function Stars({ rating }) {
  return (
    <View style={styles.starsRow}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Text
          key={star}
          style={[
            styles.star,
            star <= rating ? styles.starActive : styles.starInactive,
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
  const driver = route.params?.driver || null;
  const driverId =
    route.params?.id_motorista || driver?.id_motorista || null;
  const driverName = driver?.nome_motorista || driver?.nome || 'Motorista';

  const [reviews, setReviews] = useState([]);
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

      const response = await get(`/avaliacao/${driverId}`);
      setReviews(response.dados || []);
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

  const average = useMemo(() => {
    if (reviews.length === 0) {
      return '0.0';
    }

    const total = reviews.reduce(
      (sum, item) => sum + Number(item.nota_avaliacao || 0),
      0,
    );
    return (total / reviews.length).toFixed(1);
  }, [reviews]);

  const renderReview = ({ item, index }) => (
    <BlurView
      intensity={24}
      tint="dark"
      experimentalBlurMethod="dimezisBlurView"
      style={styles.reviewCard}
    >
      <View style={styles.reviewHeader}>
        <View>
          <Text style={styles.reviewAuthor}>Passageiro {index + 1}</Text>
          <Text style={styles.reviewDate}>
            {item.data_avaliacao
              ? new Date(item.data_avaliacao).toLocaleString('pt-BR')
              : 'Data não informada'}
          </Text>
        </View>

        <View style={styles.ratingPill}>
          <Text style={styles.ratingPillText}>
            {item.nota_avaliacao || 0}/5
          </Text>
        </View>
      </View>

      <Stars rating={Number(item.nota_avaliacao || 0)} />

      <Text style={styles.reviewText}>
        {item.comentario_avaliacao?.trim() ||
          'Avaliação enviada sem comentário.'}
      </Text>
    </BlurView>
  );

  return (
    <ImageBackground
      source={require('../../../assets/fundo.png')}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.backgroundOverlay} />

      <SafeAreaView style={styles.screen}>
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
            <Text style={styles.title}>Avaliações</Text>
          </View>
        </View>

        <BlurView
          intensity={28}
          tint="dark"
          experimentalBlurMethod="dimezisBlurView"
          style={styles.summaryCard}
        >
          <View style={styles.summaryCopy}>
            <Text style={styles.summaryLabel}>Nota média de {driverName}</Text>
            <Text style={styles.summaryScore}>{average}</Text>
          </View>

          <View style={styles.summaryRight}>
            <Stars rating={Math.round(Number(average))} />
            <Text style={styles.summaryCount}>
              {reviews.length}{' '}
              {reviews.length === 1 ? 'avaliação' : 'avaliações'}
            </Text>
          </View>
        </BlurView>

        {loading ? (
          <View style={styles.feedbackContainer}>
            <ActivityIndicator color="#E0F2FE" size="large" />
            <Text style={styles.feedbackText}>Carregando avaliações...</Text>
          </View>
        ) : error ? (
          <View style={styles.feedbackContainer}>
            <Text style={styles.errorText}>{error}</Text>
            <TouchableOpacity style={styles.emptyButton} onPress={loadReviews}>
              <Text style={styles.emptyButtonText}>Tentar novamente</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <FlatList
            data={reviews}
            keyExtractor={(item) => String(item.id_avaliacao)}
            renderItem={renderReview}
            contentContainerStyle={[
              styles.listContent,
              reviews.length === 0 && styles.emptyListContent,
            ]}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <BlurView
                intensity={24}
                tint="dark"
                experimentalBlurMethod="dimezisBlurView"
                style={styles.emptyCard}
              >
                <Text style={styles.emptyTitle}>Ainda não há avaliações</Text>
                <Text style={styles.emptyText}>
                  Quando os passageiros avaliarem este motorista, os
                  comentários e notas aparecerão aqui.
                </Text>

                <TouchableOpacity
                  style={styles.emptyButton}
                  activeOpacity={0.85}
                  onPress={() =>
                    navigation.navigate('InfoMotorista', {
                      id_motorista: Number(driverId),
                      driver,
                      routeName: route.params?.routeName,
                    })
                  }
                >
                  <Text style={styles.emptyButtonText}>Avaliar motorista</Text>
                </TouchableOpacity>
              </BlurView>
            }
          />
        )}
      </SafeAreaView>
    </ImageBackground>
  );
}
