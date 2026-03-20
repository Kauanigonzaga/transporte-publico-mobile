import { View, Text, TouchableOpacity }  from 'react-native'; 

import { useNavigation } from '@react-navigation/native';

export default function Home() { 
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Linhas')}>
                <Text>Linhas</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Rotas')}>
                <Text>Rotas</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Pontos')}>
                <Text>Pontos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('AvaliacaoMotorista')}>
                <Text>Avaliação do motorista</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

