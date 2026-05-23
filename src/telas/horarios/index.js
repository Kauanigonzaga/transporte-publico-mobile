import { useMemo, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

// Troque este array pelo retorno da API quando o back estiver pronto.
const SCHEDULES = [
  {
    id: 'azul',
    name: 'Azul',
    color: '#1D4ED8',
    softColor: '#DBEAFE',
    origin: 'Centro',
    destination: 'Bairro A',
    points: [
      { name: 'Terminal Central', times: ['06:40', '07:20', '08:00', '08:40'] },
      { name: 'Escola Estadual', times: ['06:55', '07:35', '08:15', '08:55'] },
      { name: 'Bairro A', times: ['07:10', '07:50', '08:30', '09:10'] },
    ],
  },
  {
    id: 'roxa',
    name: 'Roxa',
    color: '#7C3AED',
    softColor: '#EDE9FE',
    origin: 'Rodoviaria',
    destination: 'Bairro B',
    points: [
      { name: 'Rodoviaria', times: ['08:00', '09:00', '10:00', '11:00'] },
      { name: 'Mercado Central', times: ['08:10', '09:10', '10:10', '11:10'] },
      { name: 'Praca Central', times: ['08:25', '09:25', '10:25', '11:25'] },
    ],
  },
  {
    id: 'amarela',
    name: 'Amarela',
    color: '#EAB308',
    softColor: '#FEF3C7',
    origin: 'Bairro D',
    destination: 'Centro',
    points: [
      { name: 'Bairro D', times: ['06:30', '07:30', '08:30', '09:30'] },
      { name: 'Escola', times: ['06:45', '07:45', '08:45', '09:45'] },
      { name: 'Centro', times: ['07:05', '08:05', '09:05', '10:05'] },
    ],
  },
  {
    id: 'laranja',
    name: 'Laranja',
    color: '#F97316',
    softColor: '#FFEDD5',
    origin: 'Bairro C',
    destination: 'Centro',
    points: [
      { name: 'Terminal Norte', times: ['07:00', '08:00', '09:00', '10:00'] },
      { name: 'Rua das Flores', times: ['07:15', '08:15', '09:15', '10:15'] },
      { name: 'Centro', times: ['07:35', '08:35', '09:35', '10:35'] },
    ],
  },
];

export default function Horarios() {
  const navigation = useNavigation();
  const [selectedLineId, setSelectedLineId] = useState(SCHEDULES[0].id);

  const selectedLine = useMemo(
    () => SCHEDULES.find((line) => line.id === selectedLineId) || SCHEDULES[0],
    [selectedLineId],
  );

  const nextTime = selectedLine.points[0]?.times[0] || '--:--';

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>

        <View style={styles.headerTextGroup}>
          <Text style={styles.brand}>BUSLY</Text>
          <Text style={styles.headerTitle}>Horarios</Text>
        </View>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.nextCard}>
          <View>
            <Text style={styles.nextLabel}>Proxima saida</Text>
            <Text style={styles.nextTime}>{nextTime}</Text>
          </View>

          <View style={[styles.lineBadge, { backgroundColor: selectedLine.color }]}>
            <Text style={styles.lineBadgeText}>{selectedLine.name}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Escolha a linha</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.lineSelector}
        >
          {SCHEDULES.map((line) => {
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
        </ScrollView>

        <View style={styles.routeCard}>
          <Text style={styles.routeLabel}>Trajeto</Text>
          <Text style={styles.routeTitle}>
            {selectedLine.origin} {'>'} {selectedLine.destination}
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Pontos e horarios</Text>

        {selectedLine.points.map((point, index) => (
          <View key={point.name} style={styles.stopCard}>
            <View style={styles.stopHeader}>
              <View style={[styles.stopMarker, { backgroundColor: selectedLine.color }]}>
                <Text style={styles.stopMarkerText}>{index + 1}</Text>
              </View>

              <View style={styles.stopInfo}>
                <Text style={styles.stopName}>{point.name}</Text>
                <Text style={styles.stopHint}>{point.times.length} horarios hoje</Text>
              </View>
            </View>

            <View style={styles.timesList}>
              {point.times.map((time) => (
                <Text key={time} style={styles.timePill}>
                  {time}
                </Text>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
