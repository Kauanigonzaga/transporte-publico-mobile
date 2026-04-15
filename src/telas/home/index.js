import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import styles from './styles.js';
import image from '../../../assets/fundo.png';


export default function Home() {
    const navigation = useNavigation();

    return (

        <ImageBackground source={image} style={styles.fundo} resizeMode="stretch">
            <View style={styles.menuSuperior}>
                <Text style={styles.tituloMenuSuperior}>BUSLY</Text>
            </View>
            <View style={styles.containerSuperior}>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('LinhasPontos')}>
                    <Text style={styles.titulo}>Linhas e Pontos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Rotas')}>
                    <Text style={styles.titulo}>Rotas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Horarios')}>
                    <Text style={styles.titulo}>Horários</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('AvaliacaoMotorista')}>
                <Text style={styles.titulo}>Avaliação do motorista</Text>
            </TouchableOpacity> */}

                <View style={styles.menuInferior}>
                    <TouchableOpacity style={styles.btnInferior} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.tituloMenuInferior}>Login</Text>
                    </TouchableOpacity>

                </View>
            </View>


        </ImageBackground>

    );
}

