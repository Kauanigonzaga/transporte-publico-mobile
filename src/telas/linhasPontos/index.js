import React, { useMemo, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

// Troque este array pelo retorno da API quando o back estiver pronto.
const LINES = [
  {
    id: 'azul',
    name: 'Azul',
    color: '#1D4ED8',
    softColor: '#DBEAFE',
    origin: 'Centro',
    destination: 'Bairro A',
    description:
      'Sai do Terminal Central, passa pela Av. Brasil, Escola Estadual e finaliza no Bairro A.',
    points: ['Terminal Central', 'Av. Brasil', 'Escola Estadual', 'Bairro A'],
  },
  {
    id: 'roxa',
    name: 'Roxa',
    color: '#7C3AED',
    softColor: '#EDE9FE',
    origin: 'Centro',
    destination: 'Bairro B',
    description:
      'Sai do Terminal Central, passa pelo Hospital Municipal, Praca Central e finaliza no Bairro B.',
    points: ['Terminal Central', 'Hospital Municipal', 'Praca Central', 'Bairro B'],
  },
  {
    id: 'amarela',
    name: 'Amarela',
    color: '#EAB308',
    softColor: '#FEF3C7',
    origin: 'Bairro D',
    destination: 'Centro',
    description:
      'Parte do Bairro D, passa pela Rua das Flores, Mercado Municipal e chega ao centro.',
    points: ['Bairro D', 'Rua das Flores', 'Mercado Municipal', 'Centro'],
  },
  {
    id: 'laranja',
    name: 'Laranja',
    color: '#F97316',
    softColor: '#FFEDD5',
    origin: 'Bairro C',
    destination: 'Centro',
    description:
      'Parte do Bairro C, passa pela Rua das Flores, Mercado Municipal e chega ao centro.',
    points: ['Bairro C', 'Rua das Flores', 'Mercado Municipal', 'Centro'],
  },
];

export default function LinhasPontos() {
  const navigation = useNavigation();
  const [selectedLineId, setSelectedLineId] = useState(LINES[0].id);

  function goHome() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  }

  const selectedLine = useMemo(
    () => LINES.find((line) => line.id === selectedLineId) || LINES[0],
    [selectedLineId],
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
          {LINES.map((line) => {
            const isSelected = line.id === selectedLine.id;

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
          {selectedLine.points.map((point, index) => {
            const isLast = index === selectedLine.points.length - 1;

            return (
              <View key={point} style={styles.pointRow}>
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
                  <Text style={styles.pointName}>{point}</Text>
                  <Text style={styles.pointHint}>
                    {index === 0
                      ? 'Ponto inicial'
                      : isLast
                        ? 'Ponto final'
                        : 'Parada intermediaria'}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>

        <TouchableOpacity
          style={styles.primaryButton}
          activeOpacity={0.86}
          onPress={() => navigation.navigate('Horarios')}
        >
          <Text style={styles.primaryButtonText}>Ver horarios desta linha</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
