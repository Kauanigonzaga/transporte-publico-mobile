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
          <View style={styles.routeCard}>
            <View style={styles.routeIconContainer}>
              <BusIcon dark />
            </View>

            <Text style={styles.routeTitle}>Consultar rotas</Text>
            <Text style={styles.routeDescription}>
              Veja rotas, pontos, horários e motoristas.
            </Text>

            <View style={styles.mainActions}>
              <TouchableOpacity
                style={[styles.actionButton, styles.primaryButton]}
                activeOpacity={0.88}
                onPress={() => navigation.navigate('Rotas')}
              >
                <Text style={styles.primaryButtonText}>Ver rotas</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.actionButton, styles.secondaryButton]}
                activeOpacity={0.88}
                onPress={() => navigation.navigate('Horarios')}
              >
                <Text style={styles.secondaryButtonText}>Ver horários</Text>
              </TouchableOpacity>
            </View>
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
