import { useMemo } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';

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
          *
        </Text>
      ))}
    </View>
  );
}

export default function AvaliacoesMotorista() {
  const navigation = useNavigation();
  const route = useRoute();
  const avaliacoes = route.params?.avaliacoes || [];

  const media = useMemo(() => {
    if (avaliacoes.length === 0) {
      return '0.0';
    }

    const total = avaliacoes.reduce((sum, item) => sum + Number(item.nota || 0), 0);
    return (total / avaliacoes.length).toFixed(1);
  }, [avaliacoes]);

  const renderAvaliacao = ({ item, index }) => (
    <View style={styles.reviewCard}>
      <View style={styles.reviewHeader}>
        <View>
          <Text style={styles.reviewAuthor}>Passageiro {index + 1}</Text>
          <Text style={styles.reviewDate}>{item.data || 'Data nao informada'}</Text>
        </View>

        <View style={styles.ratingPill}>
          <Text style={styles.ratingPillText}>{item.nota || 0}/5</Text>
        </View>
      </View>

      <Stars rating={Number(item.nota || 0)} />

      <Text style={styles.reviewText}>
        {item.comentario?.trim() || 'Avaliacao enviada sem comentario.'}
      </Text>
    </View>
  );

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
          <Text style={styles.title}>Avaliacoes</Text>
        </View>
      </View>

      <View style={styles.summaryCard}>
        <View>
          <Text style={styles.summaryLabel}>Nota media do motorista</Text>
          <Text style={styles.summaryScore}>{media}</Text>
        </View>

        <View style={styles.summaryRight}>
          <Stars rating={Math.round(Number(media))} />
          <Text style={styles.summaryCount}>
            {avaliacoes.length} {avaliacoes.length === 1 ? 'avaliacao' : 'avaliacoes'}
          </Text>
        </View>
      </View>

      <FlatList
        data={avaliacoes}
        keyExtractor={(_, index) => String(index)}
        renderItem={renderAvaliacao}
        contentContainerStyle={[
          styles.listContent,
          avaliacoes.length === 0 && styles.emptyListContent,
        ]}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyCard}>
            <Text style={styles.emptyTitle}>Ainda nao ha avaliacoes</Text>
            <Text style={styles.emptyText}>
              Quando os passageiros avaliarem o motorista, os comentarios e notas
              vao aparecer aqui.
            </Text>

            <TouchableOpacity
              style={styles.emptyButton}
              activeOpacity={0.85}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.emptyButtonText}>Avaliar motorista</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </SafeAreaView>
  );
}
