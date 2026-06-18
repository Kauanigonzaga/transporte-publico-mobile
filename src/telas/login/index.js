import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';
import { post } from '../../services/api';

const USER_TYPE = {
  admin: 1,
  motorista: 2,
};

export default function Login() {
  const navigation = useNavigation();
  const route = useRoute();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const loginType = route.params?.loginType === 'admin' ? 'admin' : 'motorista';

  function goHome() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  }

  async function handleLogin() {
    if (!user.trim() || !password.trim()) {
      Alert.alert('Dados obrigatórios', 'Informe usuário e senha para continuar.');
      return;
    }

    try {
      setLoading(true);

      const response = await post('/auth/login', {
        usuario: user.trim(),
        senha: password,
        tipoUsuario: USER_TYPE[loginType],
      });
      const authenticatedUser = response.dados?.usuario || response.dados;
      const token = response.dados?.token;

      if (loginType === 'admin') {
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'HomeAdmin',
              params: { usuario: authenticatedUser, token },
            },
          ],
        });
        return;
      }

      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'HomeMotorista',
            params: {
              id_motorista: Number(authenticatedUser.id_motorista),
              usuario: authenticatedUser,
              token,
            },
          },
        ],
      });
    } catch (loginError) {
      Alert.alert('Erro ao entrar', loginError.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <LinearGradient
      colors={['#1E40AF', '#2563EB', '#06142E']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.screen}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.topBar}>
          <Text style={styles.brand}>OminiBus</Text>

          <TouchableOpacity
            style={styles.homeButton}
            activeOpacity={0.85}
            onPress={goHome}
          >
            <Text style={styles.homeButtonText}>Home</Text>
          </TouchableOpacity>
        </View>

        <KeyboardAvoidingView
          style={styles.centerWrapper}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView
            style={styles.formScroll}
            contentContainerStyle={styles.center}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.formCard}>
              <View style={styles.loginIcon}>
                <Text style={styles.loginIconText}>✓</Text>
              </View>

              <Text style={styles.formTitle}>Login</Text>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Usuário</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite seu usuário"
                  placeholderTextColor="#8A98A8"
                  value={user}
                  onChangeText={setUser}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Senha</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite sua senha"
                  placeholderTextColor="#8A98A8"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                />
              </View>

              <TouchableOpacity
                style={[styles.primaryButton, loading && styles.primaryButtonDisabled]}
                activeOpacity={0.86}
                onPress={handleLogin}
                disabled={loading}
              >
                <Text style={styles.primaryButtonText}>
                  {loading ? 'Entrando...' : 'Entrar'}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}
