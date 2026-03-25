import { View, Text, TouchableOpacity }  from 'react-native'; 

import { useNavigation } from '@react-navigation/native';
import styles from './styles.js';

export default function Home() { 
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Linhas')}>

                <Text style={styles.botao}>Linhas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Rotas')}>
                <Text style={styles.botao}>Rotas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Pontos')}>
                <Text style={styles.botao}>Pontos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('AvaliacaoMotorista')}>
                <Text style={styles.botao}>Avaliação do motorista</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.botao}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

