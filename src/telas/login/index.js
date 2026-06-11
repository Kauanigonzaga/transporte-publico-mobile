import { useEffect, useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';
import { post } from '../../services/api';

export default function Login() {
  const navigation = useNavigation();
  const route = useRoute();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState('motorista');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (route.params?.loginType === 'admin' || route.params?.loginType === 'motorista') {
      setLoginType(route.params.loginType);
    }
  }, [route.params?.loginType]);

  function goHome() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  }

  async function handleLogin() {
    if (!user.trim() || !password.trim()) {
      Alert.alert('Dados obrigatorios', 'Informe usuario e senha para continuar.');
      return;
    }

    try {
      setLoading(true);

      const response = await post('/login', {
        usuario: user.trim(),
        senha: password,
        tipo: loginType,
      });
      const authenticatedUser = response.dados;

      if (loginType === 'admin') {
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'HomeAdmin',
              params: { usuario: authenticatedUser },
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
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.85}
          onPress={goHome}
        >
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>

        <Text style={styles.brand}>OminiBus</Text>
      </View>

      <View style={styles.hero}>
        <Text style={styles.title}>Acesse sua conta</Text>
        <Text style={styles.subtitle}>
          Entre como motorista para ver sua rota ou como administrador para gerenciar o OminiBus.
        </Text>
      </View>

      <View style={styles.formCard}>
        <Text style={styles.formTitle}>Tipo de acesso</Text>

        <View style={styles.roleSelector}>
          <TouchableOpacity
            style={[
              styles.roleButton,
              loginType === 'motorista' && styles.roleButtonActive,
            ]}
            activeOpacity={0.86}
            onPress={() => setLoginType('motorista')}
          >
            <Text
              style={[
                styles.roleButtonText,
                loginType === 'motorista' && styles.roleButtonTextActive,
              ]}
            >
              Motorista
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.roleButton,
              loginType === 'admin' && styles.roleButtonActive,
            ]}
            activeOpacity={0.86}
            onPress={() => setLoginType('admin')}
          >
            <Text
              style={[
                styles.roleButtonText,
                loginType === 'admin' && styles.roleButtonTextActive,
              ]}
            >
              Admin
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Usuario</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu usuario"
            placeholderTextColor="#8A98A8"
            value={user}
            onChangeText={setUser}
            autoCapitalize="none"
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
          style={[styles.primaryButton, loading && { opacity: 0.65 }]}
          activeOpacity={0.86}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.primaryButtonText}>
            {loading
              ? 'Entrando...'
              : loginType === 'motorista'
                ? 'Entrar como motorista'
                : 'Entrar como admin'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          activeOpacity={0.86}
          onPress={goHome}
        >
          <Text style={styles.secondaryButtonText}>Entrar como passageiro</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
