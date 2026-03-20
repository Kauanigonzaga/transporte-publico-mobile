import { View, Text, TouchableOpacity, TextInput }  from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
import styles from './styles.js';

export default function Rotas() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Rotas</Text>
      
                <TouchableOpacity >
                <Text style={styles.botaoRoxo}>Rota Roxa</Text>
                <Text style={styles.botaoAzul}>Rota Azul</Text>
                <Text style={styles.botaoAmarelo}>Rota Amarela</Text>
                <Text style={styles.botaoLaranja}>Rota Laranja</Text>
            </TouchableOpacity>
        </View>
    );
}

