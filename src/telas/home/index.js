import { View, Text, TouchableOpacity, Image }  from 'react-native'; 

import { useNavigation } from '@react-navigation/native';
import styles from './styles.js';
import image from '../../../assets/fundo.png';


export default function Home() { 
    const navigation = useNavigation();
    
    return (
        <View> 

            <Image source={image} style={styles.fundo} />

            <Text style={styles.menuSuperior}>BUSLY</Text>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Linhas')}>
                <Text style={styles.titulo}>Linhas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Rotas')}>
                <Text style={styles.titulo}>Rotas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Pontos')}>
                <Text style={styles.titulo}>Pontos</Text>
            </TouchableOpacity>
             <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Horarios')}>
                <Text style={styles.titulo}>Horários</Text>
            </TouchableOpacity>

           {/* <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('AvaliacaoMotorista')}>
                <Text style={styles.titulo}>Avaliação do motorista</Text>
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.titulo}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

