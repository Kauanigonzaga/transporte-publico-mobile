import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

function BusIcon({ dark = false }) {
  return (
    <View style={[styles.busIcon, dark && styles.busIconDark]}>
      <View style={styles.busWindows}>
        <View style={[styles.busWindow, dark && styles.busWindowDark]} />
        <View style={[styles.busWindow, dark && styles.busWindowDark]} />
      </View>
      <View style={[styles.busLine, dark && styles.busLineDark]} />
      <View style={styles.busWheels}>
        <View style={[styles.busWheel, dark && styles.busWheelDark]} />
        <View style={[styles.busWheel, dark && styles.busWheelDark]} />
      </View>
    </View>
  );
}

function AccessButton({ title, onPress }) {
  return (
    <TouchableOpacity
      style={styles.accessButton}
      activeOpacity={0.86}
      onPress={onPress}
    >
      <Text style={styles.accessButtonText}>{title}</Text>
      <Text style={styles.accessButtonArrow}>{'>'}</Text>
    </TouchableOpacity>
  );
}

export default function Home() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../../assets/fundo.png')}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.mapOverlay} />

      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.header}>
          <View style={styles.brandGroup}>
            <View style={styles.logoIcon}>
              <BusIcon />
            </View>
            <Text style={styles.brand}>OminiBus</Text>
          </View>
        </View>

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.hero}>
            <Text style={styles.eyebrow}>Mobilidade urbana inteligente</Text>
            <Text style={styles.title}>
              Seu caminho,{'\n'}
              <Text style={styles.titleAccent}>nossa missão.</Text>
            </Text>
            <Text style={styles.subtitle}>
              Planeje suas rotas e acompanhe os horários de forma simples,
              rápida e intuitiva.
            </Text>
          </View>

          <View style={styles.routeCard}>
            <View style={styles.routeIconContainer}>
              <BusIcon dark />
            </View>

            <Text style={styles.routeTitle}>Rotas de Ônibus</Text>
            <Text style={styles.routeDescription}>
              Encontre a melhor linha para chegar ao seu destino.
            </Text>

            <TouchableOpacity
              style={styles.primaryButton}
              activeOpacity={0.88}
              onPress={() => navigation.navigate('Rotas')}
            >
              <Text style={styles.primaryButtonText}>Ver Rotas</Text>
              <Text style={styles.primaryButtonArrow}>{'>'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.scheduleButton}
              activeOpacity={0.82}
              onPress={() => navigation.navigate('Horarios')}
            >
              <Text style={styles.scheduleButtonText}>Consultar horários</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.restrictedAccess}>
            <Text style={styles.accessLabel}>Acesso restrito</Text>
            <View style={styles.accessRow}>
              <AccessButton
                title="Motorista"
                onPress={() =>
                  navigation.navigate('Login', { loginType: 'motorista' })
                }
              />
              <AccessButton
                title="Administrador"
                onPress={() =>
                  navigation.navigate('Login', { loginType: 'admin' })
                }
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
