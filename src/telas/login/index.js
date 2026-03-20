import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from "./styles";

export default function Login() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Entrar</Text>
            <TextInput style={styles.input} placeholder="Usuário" />
            <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
            <TouchableOpacity 
                style={styles.botao} 
                onPress={() => navigation.navigate('HomeMotorista')}
            >
                <Text style={styles.botaoTexto}>Acessar sistema</Text>
            </TouchableOpacity>
        </View>
    );
}

