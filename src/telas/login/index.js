import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";

export default function Login() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            {/* Botão de voltar com caixa */}
            <TouchableOpacity 
                style={styles.voltarBox}
                onPress={() => navigation.navigate('Home')}>
                
                <Text style={styles.voltarTexto}>Voltar</Text>
            </TouchableOpacity>

            {/* Conteúdo central */}
            <View style={styles.centerArea}>
                <Text style={styles.titulo}>Entrar</Text>

                <View style={styles.form}>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Usuário" 
                    />

                    <TextInput 
                        style={styles.input} 
                        placeholder="Senha" 
                        secureTextEntry 
                    />

                    <TouchableOpacity 
                        style={styles.botao} 
                        onPress={() => navigation.navigate('HomeMotorista')}>
                        
                        <Text style={styles.botaoTexto}>
                            Acessar sistema
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    );
}