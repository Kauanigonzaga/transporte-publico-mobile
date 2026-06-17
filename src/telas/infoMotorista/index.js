import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  ActivityIndicator,
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';
import motoristaImage from '../../../assets/imgMotorista.png';
import { getAssetUrl } from '../../services/api';
import {
  buscarMotorista,
  buscarResumoAvaliacoesMotorista,
  enviarAvaliacaoMotorista,
  listarRotasMotorista,
} from '../../services/motoristas';

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

function getRouteName(route) {
  return route?.nome_rota || route?.nome_linhas || route?.nome_linha || route?.nome || '';
}

function Stars({ rating, onSelect, size = 'medium' }) {
  const roundedRating = Math.round(Number(rating || 0));

  return (
    <View style={styles.starsRow}>
      {[1, 2, 3, 4, 5].map((star) => (
        <TouchableOpacity
          key={star}
          activeOpacity={onSelect ? 0.75 : 1}
          disabled={!onSelect}
          onPress={() => onSelect?.(star)}
          style={styles.starButton}
        >
          <Text
            style={[
              styles.star,
              size === 'large' && styles.starLarge,
              star <= roundedRating ? styles.starActive : styles.starInactive,
            ]}
          >
            ★
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default function InfoMotorista() {
  const navigation = useNavigation();
  const route = useRoute();
  const driverId = getDriverId(route.params);

  const [driver, setDriver] = useState(route.params?.driver || null);
  const [routes, setRoutes] = useState([]);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [reviewsCount, setReviewsCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    loadDriver();
  }, [driverId]);

  async function loadDriver() {
    if (!driverId) {
      setError('Motorista não informado.');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError('');

      const [driverData, routeItems, summaryData] = await Promise.all([
        buscarMotorista(driverId),
        listarRotasMotorista(driverId),
        buscarResumoAvaliacoesMotorista(driverId),
      ]);

      setDriver({
        ...(driverData || {}),
        id_motorista: driverData?.id_motorista || driverData?.id || driverId,
      });
      setRoutes(routeItems);
      setAverageRating(Number(summaryData.media || 0));
      setReviewsCount(Number(summaryData.quantidade || 0));
    } catch (loadError) {
      setError(loadError.message);
    } finally {
      setLoading(false);
    }
  }

  async function refreshSummary() {
    const summaryData = await buscarResumoAvaliacoesMotorista(driverId);
    setAverageRating(Number(summaryData.media || 0));
    setReviewsCount(Number(summaryData.quantidade || 0));
  }

  async function handleSubmitReview() {
    const trimmedComment = comment.trim();

    if (rating === 0) {
      Alert.alert('Nota obrigatória', 'Selecione uma nota para avaliar o motorista.');
      return;
    }

    if (!trimmedComment) {
      Alert.alert('Comentário obrigatório', 'Escreva um comentário para enviar sua avaliação.');
      return;
    }

    try {
      setSubmitting(true);
      setSuccessMessage('');

      await enviarAvaliacaoMotorista({
        id_motorista: Number(driverId),
        nota_avaliacao: rating,
        comentario_avaliacao: trimmedComment,
      });

      setRating(0);
      setComment('');
      setSuccessMessage('Avaliação enviada com sucesso.');
      await refreshSummary();
    } catch (submitError) {
      Alert.alert('Erro ao avaliar', submitError.message);
    } finally {
      setSubmitting(false);
    }
  }

  function openPreviousReviews() {
    navigation.navigate('AvaliacoesMotorista', {
      id_motorista: Number(driverId),
      driver,
    });
  }

  const driverName = getDriverName(driver);
  const photoUrl = getAssetUrl(driver?.foto_motorista || driver?.foto);
  const driverStatus = driver?.status_motorista || driver?.status || '';
  const routeNames = routes.map(getRouteName).filter(Boolean);
  const routeLabel = routeNames.length ? routeNames.join(', ') : '';
  const averageLabel = Number(averageRating || 0).toFixed(1);

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
              <Text style={styles.title}>Informações do motorista</Text>
            </View>
          </View>

          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator color="#FFFFFF" size="large" />
              <Text style={styles.loadingText}>Carregando motorista...</Text>
            </View>
          ) : error ? (
            <View style={styles.loadingContainer}>
              <Text style={styles.errorText}>{error}</Text>
              <TouchableOpacity style={styles.primaryButton} onPress={loadDriver}>
                <Text style={styles.primaryButtonText}>Tentar novamente</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <ScrollView
              style={styles.content}
              contentContainerStyle={styles.contentContainer}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.profileCard}>
                <View style={styles.profileTop}>
                  <Image
                    source={photoUrl ? { uri: photoUrl } : motoristaImage}
                    style={styles.avatar}
                  />

                  <View style={styles.profileInfo}>
                    {driverStatus ? (
                      <View style={styles.statusPill}>
                        <Text style={styles.statusText}>{driverStatus}</Text>
                      </View>
                    ) : null}
                    {driverName ? (
                      <Text style={styles.driverName}>{driverName}</Text>
                    ) : null}
                    <Text style={styles.driverRoute}>
                      {routeLabel || 'Sem rota vinculada'}
                    </Text>
                  </View>
                </View>

                <View style={styles.ratingSummary}>
                  <View>
                    <Text style={styles.summaryLabel}>Média de avaliações</Text>
                    <Text style={styles.summaryScore}>{averageLabel}</Text>
                  </View>

                  <View style={styles.summaryRight}>
                    <Stars rating={averageRating} />
                    <Text style={styles.summaryCount}>
                      {reviewsCount} {reviewsCount === 1 ? 'avaliação' : 'avaliações'}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.routesCard}>
                <Text style={styles.sectionTitle}>Rotas</Text>
                {routeNames.length ? (
                  routeNames.map((name, index) => (
                    <View key={`${name}-${index}`} style={styles.routePill}>
                      <Text style={styles.routePillText}>{name}</Text>
                    </View>
                  ))
                ) : (
                  <Text style={styles.emptyText}>Nenhuma rota vinculada.</Text>
                )}
              </View>

              <View style={styles.reviewCard}>
                <Text style={styles.sectionTitle}>Avalie sua viagem</Text>
                <Text style={styles.sectionDescription}>
                  Selecione uma nota e envie seu comentário.
                </Text>

                <View style={styles.largeStarsWrapper}>
                  <Stars rating={rating} onSelect={setRating} size="large" />
                </View>

                <TextInput
                  placeholder="Digite seu comentário..."
                  placeholderTextColor="#A9C5E8"
                  style={styles.input}
                  value={comment}
                  onChangeText={(value) => {
                    setComment(value);
                    setSuccessMessage('');
                  }}
                  maxLength={255}
                  multiline
                />

                {successMessage ? (
                  <Text style={styles.successText}>{successMessage}</Text>
                ) : null}

                <TouchableOpacity
                  style={[styles.primaryButton, submitting && styles.buttonDisabled]}
                  activeOpacity={0.86}
                  disabled={submitting}
                  onPress={handleSubmitReview}
                >
                  {submitting ? (
                    <ActivityIndicator color="#FFFFFF" />
                  ) : (
                    <Text style={styles.primaryButtonText}>Enviar avaliação</Text>
                  )}
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.secondaryButton}
                  activeOpacity={0.86}
                  onPress={openPreviousReviews}
                >
                  <Text style={styles.secondaryButtonText}>
                    Ver avaliações anteriores
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          )}
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
}
