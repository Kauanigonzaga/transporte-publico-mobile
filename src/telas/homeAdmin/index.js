import { useRef } from 'react';
import {
  Alert,
  Animated,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const MODULES = [
  {
    id: 'points',
    title: 'Pontos de Ônibus',
    description: 'Cadastre e ajuste os locais de parada das linhas.',
    image: require('../../../assets/admin-pontos.png'),
    actions: [
      {
        label: 'Editar pontos',
        icon: 'P',
        screen: 'LinhasPontos',
      },
    ],
  },
  {
    id: 'schedules',
    title: 'Horários',
    description: 'Gerencie os horários de passagem por ponto.',
    image: require('../../../assets/admin-horarios.png'),
    actions: [
      {
        label: 'Editar horários',
        icon: 'H',
        screen: 'Horarios',
      },
    ],
  },
  {
    id: 'routes',
    title: 'Rotas',
    description: 'Organize linhas, trajetos e pontos no mapa.',
    image: require('../../../assets/admin-rotas.png'),
    actions: [
      {
        label: 'Editar rotas',
        icon: 'R',
        screen: 'Rotas',
      },
    ],
  },
  {
    id: 'drivers',
    title: 'Motoristas',
    description: 'Cadastre motoristas e mantenha os dados atualizados.',
    icon: '+',
    actions: [
      {
        label: 'Cadastrar',
        icon: '+',
        unavailable: 'O cadastro de motoristas ainda não possui tela no app.',
      },
      {
        label: 'Ver motoristas',
        icon: '≡',
        unavailable: 'A gestão de motoristas ainda não possui tela no app.',
      },
    ],
  },
];

function AdminCard({ item, columns, onAction }) {
  const scale = useRef(new Animated.Value(1)).current;

  function animate(toValue) {
    Animated.spring(scale, {
      toValue,
      friction: 7,
      tension: 120,
      useNativeDriver: true,
    }).start();
  }

  return (
    <Animated.View
      style={[
        styles.cardShell,
        columns === 2 ? styles.cardHalf : styles.cardFull,
        { transform: [{ scale }] },
      ]}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPressIn={() => animate(0.98)}
        onPressOut={() => animate(1)}
        style={styles.cardTouchArea}
      >
        <BlurView
          intensity={34}
          tint="dark"
          experimentalBlurMethod="dimezisBlurView"
          style={styles.card}
        >
          <View style={styles.cardContent}>
            {item.image ? (
              <Image
                source={item.image}
                resizeMode="contain"
                style={styles.cardImage}
              />
            ) : (
              <View style={styles.cardIconArea}>
                <View style={styles.driverIcon}>
                  <View style={styles.driverHead} />
                  <View style={styles.driverBody} />
                  <Text style={styles.driverPlus}>{item.icon}</Text>
                </View>
              </View>
            )}

            <View style={styles.cardCopy}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </View>

            <View style={styles.cardActions}>
              {item.actions.map((action) => (
                <TouchableOpacity
                  key={action.label}
                  activeOpacity={0.82}
                  onPress={() => onAction(action)}
                  style={styles.actionButton}
                >
                  <LinearGradient
                    colors={['#2563EB', '#1D4ED8']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.actionGradient}
                  >
                    <View style={styles.actionIcon}>
                      <Text style={styles.actionIconText}>{action.icon}</Text>
                    </View>
                    <Text style={styles.actionText}>{action.label}</Text>
                  </LinearGradient>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </BlurView>
      </TouchableOpacity>
    </Animated.View>
  );
}

export default function HomeAdmin() {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const columns = width >= 600 ? 2 : 1;

  function logout() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  }

  function handleAction(action) {
    if (action.screen) {
      navigation.navigate(action.screen, { adminMode: true });
      return;
    }

    Alert.alert('Módulo em preparação', action.unavailable);
  }

  return (
    <ImageBackground
      source={require('../../../assets/admin-fundo.png')}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.backgroundOverlay} />

      <SafeAreaView style={styles.safeArea}>
        <LinearGradient
          colors={['#1E40AF', '#3B82F6']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.header}
        >
          <View style={styles.headerTitleRow}>
            <View style={styles.busIcon}>
              <View style={styles.busWindow} />
              <View style={styles.busWindow} />
              <View style={styles.busWheelLeft} />
              <View style={styles.busWheelRight} />
            </View>
            <Text style={styles.headerTitle}>Painel Administrativo</Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.82}
            onPress={logout}
            style={styles.logoutButton}
          >
            <Text style={styles.logoutIcon}>›</Text>
            <Text style={styles.logoutText}>Sair</Text>
          </TouchableOpacity>
        </LinearGradient>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.intro}>
            <Text style={styles.eyebrow}>TRANSPORTE PÚBLICO</Text>
            <Text style={styles.pageTitle}>
              Escolha uma área para gerenciar
            </Text>
            <Text style={styles.pageDescription}>
              Atualize pontos, horários, rotas e motoristas pelo painel central
              do sistema.
            </Text>
          </View>

          <View style={styles.grid}>
            {MODULES.map((item) => (
              <AdminCard
                key={item.id}
                item={item}
                columns={columns}
                onAction={handleAction}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
