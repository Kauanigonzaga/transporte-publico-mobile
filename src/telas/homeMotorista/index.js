import React, { useMemo, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import motoristaImage from '../../../assets/imgMotorista.png';

// Troque este objeto pelo retorno da API quando o back estiver pronto.
const DRIVER_MOCK = {
  id: 'motorista-001',
  name: 'Joao Paulo',
  routeName: 'Linha Azul',
  vehicle: 'Onibus 204',
  plate: 'BUS-2047',
  cnh: '00000000000',
  cpf: '123.456.789-00',
  nextStop: 'Terminal Central',
  shift: 'Manha',
  photo: motoristaImage,
};

const REVIEW_MOCK = [
  {
    motoristaId: 'motorista-001',
    nota: 5,
    comentario: 'Motorista atencioso e viagem tranquila.',
    data: '22/05/2026 19:40',
  },
  {
    motoristaId: 'motorista-001',
    nota: 4,
    comentario: 'Chegou no horario e dirigiu bem.',
    data: '22/05/2026 18:10',
  },
];

export default function HomeMotorista() {
  const navigation = useNavigation();
  const [isOnline, setIsOnline] = useState(true);
  const [reviews] = useState(REVIEW_MOCK);

  const averageRating = useMemo(() => {
    if (reviews.length === 0) {
      return '0.0';
    }

    const total = reviews.reduce((sum, item) => sum + Number(item.nota || 0), 0);
    return (total / reviews.length).toFixed(1);
  }, [reviews]);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.homeButton}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.homeButtonText}>Home</Text>
        </TouchableOpacity>

        <View style={styles.headerTextGroup}>
          <Text style={styles.brand}>BUSLY</Text>
          <Text style={styles.headerTitle}>Painel do motorista</Text>
        </View>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileCard}>
          <Image source={DRIVER_MOCK.photo} style={styles.avatar} />

          <View style={styles.profileInfo}>
            <View
              style={[
                styles.statusPill,
                isOnline ? styles.statusOnline : styles.statusOffline,
              ]}
            >
              <Text
                style={[
                  styles.statusText,
                  isOnline ? styles.statusTextOnline : styles.statusTextOffline,
                ]}
              >
                {isOnline ? 'Em rota' : 'Fora de rota'}
              </Text>
            </View>

            <Text style={styles.driverName}>{DRIVER_MOCK.name}</Text>
            <Text style={styles.driverRoute}>{DRIVER_MOCK.routeName}</Text>
          </View>
        </View>

        <View style={styles.statusCard}>
          <View>
            <Text style={styles.cardLabel}>Status da operacao</Text>
            <Text style={styles.cardTitle}>
              {isOnline ? 'Disponivel para passageiros' : 'Pausado'}
            </Text>
          </View>

          <TouchableOpacity
            style={[
              styles.statusButton,
              isOnline ? styles.pauseButton : styles.startButton,
            ]}
            activeOpacity={0.85}
            onPress={() => setIsOnline((current) => !current)}
          >
            <Text style={styles.statusButtonText}>
              {isOnline ? 'Pausar' : 'Iniciar'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statsGrid}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Nota media</Text>
            <Text style={styles.statValue}>{averageRating}</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Avaliacoes</Text>
            <Text style={styles.statValue}>{reviews.length}</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Proximo ponto</Text>
            <Text style={styles.statValueSmall}>{DRIVER_MOCK.nextStop}</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Turno</Text>
            <Text style={styles.statValueSmall}>{DRIVER_MOCK.shift}</Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>Dados do motorista</Text>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>CPF</Text>
            <Text style={styles.infoValue}>{DRIVER_MOCK.cpf}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>CNH</Text>
            <Text style={styles.infoValue}>{DRIVER_MOCK.cnh}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Veiculo</Text>
            <Text style={styles.infoValue}>{DRIVER_MOCK.vehicle}</Text>
          </View>

          <View style={styles.infoRowLast}>
            <Text style={styles.infoLabel}>Placa</Text>
            <Text style={styles.infoValue}>{DRIVER_MOCK.plate}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.primaryButton}
          activeOpacity={0.86}
          onPress={() =>
            navigation.navigate('AvaliacoesMotorista', {
              avaliacoes: reviews,
              driver: DRIVER_MOCK,
            })
          }
        >
          <Text style={styles.primaryButtonText}>Ver avaliacoes</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
