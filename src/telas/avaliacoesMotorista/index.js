import { useNavigation } from '@react-navigation/native';
import { View, Text }  from 'react-native';
    

import Styles from './styles';

export default function AvaliacoesMotorista() {
    const navigation = useNavigation();

    return (
        <View>
            <Text>Avaliações do Motorista</Text>
        </View>
    );
}

