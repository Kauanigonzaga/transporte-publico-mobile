import React, { useMemo, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
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

// Troque este objeto pelo retorno da API quando o back estiver pronto.
const DRIVER_MOCK = {
  id: 'motorista-001',
  name: 'Joao Paulo',
  routeName: 'Linha Azul',
  vehicle: 'Onibus 204',
  plate: 'BUS-2047',
  status: 'Em rota',
  experience: '4 anos',
  photo: motoristaImage,
};

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
  const driver = route.params?.driver || DRIVER_MOCK;

  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState(route.params?.avaliacoes || []);
  const [rating, setRating] = useState(0);

  const averageRating = useMemo(() => {
    if (reviews.length === 0) {
      return '0.0';
    }

    const total = reviews.reduce((sum, item) => sum + Number(item.nota || 0), 0);
    return (total / reviews.length).toFixed(1);
  }, [reviews]);

  function handleSubmitReview() {
    if (rating === 0) {
      Alert.alert('Nota obrigatoria', 'Selecione uma nota para avaliar o motorista.');
      return;
    }

    const newReview = {
      motoristaId: driver.id,
      nota: rating,
      comentario: comment,
      data: new Date().toLocaleString(),
    };

    // Depois, troque este trecho por um POST para a API.
    const updatedReviews = [...reviews, newReview];

    setReviews(updatedReviews);
    setRating(0);
    setComment('');

    navigation.navigate('AvaliacoesMotorista', {
      avaliacoes: updatedReviews,
      driver,
    });
  }

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

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileCard}>
          <View style={styles.profileTop}>
            <Image source={driver.photo || motoristaImage} style={styles.avatar} />

            <View style={styles.profileInfo}>
              <View style={styles.statusPill}>
                <Text style={styles.statusText}>{driver.status}</Text>
              </View>
              <Text style={styles.driverName}>{driver.name}</Text>
              <Text style={styles.driverRoute}>{driver.routeName}</Text>
            </View>
          </View>

          <View style={styles.ratingSummary}>
            <View>
              <Text style={styles.summaryLabel}>Avaliacao media</Text>
              <Text style={styles.summaryScore}>{averageRating}</Text>
            </View>

            <View style={styles.summaryRight}>
              <Stars rating={Math.round(Number(averageRating))} />
              <Text style={styles.summaryCount}>
                {reviews.length} {reviews.length === 1 ? 'avaliacao' : 'avaliacoes'}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.infoGrid}>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Veiculo</Text>
            <Text style={styles.infoValue}>{driver.vehicle}</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Placa</Text>
            <Text style={styles.infoValue}>{driver.plate}</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Experiencia</Text>
            <Text style={styles.infoValue}>{driver.experience}</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Linha</Text>
            <Text style={styles.infoValue}>{driver.routeName}</Text>
          </View>
        </View>

        <View style={styles.reviewCard}>
          <Text style={styles.sectionTitle}>Avalie sua viagem</Text>
          <Text style={styles.sectionDescription}>
            Sua avaliacao ajuda outros passageiros e melhora o servico.
          </Text>

          <View style={styles.largeStarsWrapper}>
            <Stars rating={rating} onSelect={setRating} size="large" />
          </View>

          <TextInput
            placeholder="Conte como foi sua experiencia..."
            placeholderTextColor="#8A98A8"
            style={styles.input}
            value={comment}
            onChangeText={setComment}
            multiline
          />

          <TouchableOpacity
            style={styles.primaryButton}
            activeOpacity={0.86}
            onPress={handleSubmitReview}
          >
            <Text style={styles.primaryButtonText}>Enviar avaliacao</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            activeOpacity={0.86}
            onPress={() =>
              navigation.navigate('AvaliacoesMotorista', {
                avaliacoes: reviews,
                driver,
              })
            }
          >
            <Text style={styles.secondaryButtonText}>Ver avaliacoes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
