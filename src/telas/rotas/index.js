import React, { useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Linking,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

import styles from './styles';
import motoristaImage from '../../../assets/imgMotorista.png';

const MAP_URL =
  'https://www.google.com/maps/d/embed?mid=1PZnUg7Xd-2Y_LuZgKu0I8XBxSUJqOGg&ehbc=2E312F';

// Troque este array pelo retorno da API quando o back estiver pronto.
const ROUTES = [
  {
    id: 'azul',
    name: 'Azul',
    description: 'Centro, terminal e principais pontos comerciais.',
    color: '#1D4ED8',
    softColor: '#DBEAFE',
    mapUrl: MAP_URL,
  },
  {
    id: 'roxa',
    name: 'Roxa',
    description: 'Bairros residenciais, escola e unidade de saude.',
    color: '#7C3AED',
    softColor: '#EDE9FE',
    mapUrl: MAP_URL,
  },
  {
    id: 'amarela',
    name: 'Amarela',
    description: 'Ligacao rapida com mercado, praca e avenida principal.',
    color: '#EAB308',
    softColor: '#FEF3C7',
    mapUrl: MAP_URL,
  },
  {
    id: 'laranja',
    name: 'Laranja',
    description: 'Regiao norte, posto de saude e acesso ao centro.',
    color: '#F97316',
    softColor: '#FFEDD5',
    mapUrl: MAP_URL,
  },
];

export default function RotasScreen() {
  const navigation = useNavigation();
  const [selectedRouteId, setSelectedRouteId] = useState(ROUTES[0].id);

  const selectedRoute = useMemo(
    () => ROUTES.find((route) => route.id === selectedRouteId) || ROUTES[0],
    [selectedRouteId],
  );

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.headerCopy}>
          <Text style={styles.brand}>BUSLY</Text>
          <Text style={styles.headerTitle}>Escolha sua rota</Text>
        </View>

        <TouchableOpacity
          style={styles.homeButton}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.homeButtonText}>Home</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          style={styles.driverCard}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('InfoMotorista')}
        >
          <Image source={motoristaImage} style={styles.avatar} />

          <View style={styles.driverInfo}>
            <Text style={styles.driverEyebrow}>Motorista da rota</Text>
            <Text style={styles.driverTitle}>Ver informações e avaliar</Text>
            <Text style={styles.driverDescription}>
              Consulte os dados do motorista e envie sua avaliação da viagem.
            </Text>
          </View>

          <Text style={styles.cardArrow}>{'>'}</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Rotas disponiveis</Text>

        <View style={styles.routesList}>
          {ROUTES.map((route) => {
            const isSelected = route.id === selectedRoute.id;

            return (
              <TouchableOpacity
                key={route.id}
                style={[
                  styles.routeButton,
                  { backgroundColor: route.softColor },
                  isSelected && {
                    backgroundColor: route.color,
                  },
                ]}
                activeOpacity={0.86}
                onPress={() => setSelectedRouteId(route.id)}
              >
                <View
                  style={[
                    styles.routeDot,
                    { backgroundColor: isSelected ? '#FFFFFF' : route.color },
                  ]}
                />
                <Text
                  style={[
                    styles.routeButtonText,
                    isSelected && styles.routeButtonTextActive,
                  ]}
                >
                  {route.name}
                </Text>
                <Text
                  style={[
                    styles.routeArrow,
                    isSelected && styles.routeArrowActive,
                  ]}
                >
                  {'>'}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.mapCard}>
          <Text style={styles.mapTitle}>Mapa da rota</Text>

          <View style={styles.mapContainer}>
            <WebView
              source={{ uri: selectedRoute.mapUrl }}
              style={styles.map}
              startInLoadingState
            />

            <TouchableOpacity
              style={styles.mapButton}
              activeOpacity={0.86}
              onPress={() => Linking.openURL(selectedRoute.mapUrl)}
            >
              <View style={styles.mapPin} />
              <Text style={styles.mapButtonText}>Ver mapa</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} activeOpacity={0.85}>
          <View style={[styles.navIcon, styles.navIconActive]}>
            <Text style={styles.navIconTextActive}>R</Text>
          </View>
          <Text style={styles.navTextActive}>Rotas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('Home')}
        >
          <View style={styles.navIcon}>
            <Text style={styles.navIconText}>P</Text>
          </View>
          <Text style={styles.navText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
