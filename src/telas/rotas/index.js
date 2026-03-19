import { View, Text }  from 'react-native'; 
import styles from './styles.js';
/*import botao from './botao/index.js';*/


export default function Rotas() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Rotas</Text>
            <Text>Rota Roxa</Text>
            <Text>Rota Azul</Text>
            <Text>Rota Amarela</Text>
            <Text>Rota Laranja</Text>
        </View>
    );
}

