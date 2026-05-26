import { useEffect, useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';

export default function Login() {
  const navigation = useNavigation();
  const route = useRoute();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState('motorista');

  useEffect(() => {
    if (route.params?.loginType === 'admin' || route.params?.loginType === 'motorista') {
      setLoginType(route.params.loginType);
    }
  }, [route.params?.loginType]);

  function handleLogin() {
    if (!user.trim() || !password.trim()) {
      Alert.alert('Dados obrigatorios', 'Informe usuario e senha para continuar.');
      return;
    }

    // Depois, troque este trecho por uma chamada POST para a API de login.
    navigation.navigate(loginType === 'motorista' ? 'HomeMotorista' : 'HomeAdmin');
  }

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

        <Text style={styles.brand}>BUSLY</Text>
      </View>

      <View style={styles.hero}>
        <Text style={styles.title}>Acesse sua conta</Text>
        <Text style={styles.subtitle}>
          Entre como motorista para ver sua rota ou como administrador para gerenciar o Busly.
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
          style={styles.primaryButton}
          activeOpacity={0.86}
          onPress={handleLogin}
        >
          <Text style={styles.primaryButtonText}>
            {loginType === 'motorista' ? 'Entrar como motorista' : 'Entrar como admin'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          activeOpacity={0.86}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.secondaryButtonText}>Entrar como passageiro</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
