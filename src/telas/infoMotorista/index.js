import { useEffect, useMemo, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';
import motoristaImage from '../../../assets/imgMotorista.png';
import { get, getAssetUrl, post } from '../../services/api';

function Stars({ rating, onSelect, size = 'medium' }) {
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
              star <= rating ? styles.starActive : styles.starInactive,
            ]}
          >
            *
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default function InfoMotorista() {
  const navigation = useNavigation();
  const route = useRoute();
  const routeDriver = route.params?.driver || null;
  const driverId =
    route.params?.id_motorista || routeDriver?.id_motorista || null;
  const routeName = route.params?.routeName || '';

  const [driver, setDriver] = useState(routeDriver);
  const [reviews, setReviews] = useState([]);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

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

      const [driverResponse, reviewsResponse] = await Promise.all([
        get(`/motoristas/${driverId}`),
        get(`/avaliacao/${driverId}`),
      ]);

      setDriver((current) => ({
        ...current,
        ...driverResponse.dados,
        id_motorista: driverResponse.dados?.id_motorista || driverId,
      }));
      setReviews(reviewsResponse.dados || []);
    } catch (loadError) {
      setError(loadError.message);
    } finally {
      setLoading(false);
    }
  }

  const averageRating = useMemo(() => {
    if (reviews.length === 0) {
      return '0.0';
    }

    const total = reviews.reduce(
      (sum, item) => sum + Number(item.nota_avaliacao || 0),
      0,
    );
    return (total / reviews.length).toFixed(1);
  }, [reviews]);

  async function handleSubmitReview() {
    if (rating === 0) {
      Alert.alert('Nota obrigatória', 'Selecione uma nota para avaliar o motorista.');
      return;
    }

    try {
      setSubmitting(true);

      await post('/avaliacao', {
        id_motorista: Number(driverId),
        nota_avaliacao: rating,
        comentario_avaliacao: comment.trim(),
      });

      setRating(0);
      setComment('');

      navigation.navigate('AvaliacoesMotorista', {
        id_motorista: Number(driverId),
        driver,
        routeName,
      });
    } catch (submitError) {
      Alert.alert('Erro ao avaliar', submitError.message);
    } finally {
      setSubmitting(false);
    }
  }

  const driverName = driver?.nome_motorista || driver?.nome || 'Motorista';
  const photoUrl = getAssetUrl(driver?.foto_motorista || driver?.foto);
  const driverStatus = driver?.status || routeDriver?.status;

  return (
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
          <Text style={styles.brand}>BUSLY</Text>
          <Text style={styles.title}>Motorista</Text>
        </View>
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color="#12355B" size="large" />
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
                <Text style={styles.driverName}>{driverName}</Text>
                <Text style={styles.driverRoute}>
                  {routeName || `Motorista #${driverId}`}
                </Text>
              </View>
            </View>

            <View style={styles.ratingSummary}>
              <View>
                <Text style={styles.summaryLabel}>Avaliação média</Text>
                <Text style={styles.summaryScore}>{averageRating}</Text>
              </View>

              <View style={styles.summaryRight}>
                <Stars rating={Math.round(Number(averageRating))} />
                <Text style={styles.summaryCount}>
                  {reviews.length}{' '}
                  {reviews.length === 1 ? 'avaliação' : 'avaliações'}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.infoGrid}>
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Identificação</Text>
              <Text style={styles.infoValue}>#{driverId}</Text>
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>CNH</Text>
              <Text style={styles.infoValue}>
                {driver?.cnh_motorista || 'Não informada'}
              </Text>
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>CPF</Text>
              <Text style={styles.infoValue}>
                {driver?.cpf_motorista || 'Não informado'}
              </Text>
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Linha</Text>
              <Text style={styles.infoValue}>{routeName || 'Não informada'}</Text>
            </View>
          </View>

          <View style={styles.reviewCard}>
            <Text style={styles.sectionTitle}>Avalie sua viagem</Text>
            <Text style={styles.sectionDescription}>
              Sua avaliação ajuda outros passageiros e melhora o serviço.
            </Text>

            <View style={styles.largeStarsWrapper}>
              <Stars rating={rating} onSelect={setRating} size="large" />
            </View>

            <TextInput
              placeholder="Conte como foi sua experiência..."
              placeholderTextColor="#8A98A8"
              style={styles.input}
              value={comment}
              onChangeText={setComment}
              maxLength={255}
              multiline
            />

            <TouchableOpacity
              style={styles.primaryButton}
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
              onPress={() =>
                navigation.navigate('AvaliacoesMotorista', {
                  id_motorista: Number(driverId),
                  driver,
                  routeName,
                })
              }
            >
              <Text style={styles.secondaryButtonText}>Ver avaliações</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
