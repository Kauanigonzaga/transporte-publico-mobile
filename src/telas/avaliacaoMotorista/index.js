import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

export default function AvaliacaoMotorista() {
    const [avaliacao, setAvaliacao] = useState('');

  return (
    <View style={styles.container}>
      
     
      <View style={styles.header}>
        <Text style={styles.headerText}>INFORMAÇÕES</Text>
      </View>

    
      <View style={styles.content}>
   
        <Image
          source={require('../../../assets/motorista.png')}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>NOME: Joao Paulo Silva</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>LINHA: Azul</Text>
        </View>

        <View style={styles.avaliacaoContainer}>
          <View style={styles.linha} />
          <Text style={styles.avaliacaoText}>Avalie seu desempenho</Text>
          <View style={styles.linha} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Digite sua avaliação"
            style={styles.input}
            value={avaliacao}
            onChangeText={setAvaliacao}
          />

          <TouchableOpacity style={styles.botaoEnviar}>
            <Text style={styles.textoBotao}>➤</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
        style={styles.botaoVer}>

          <Text style={styles.textoVer}>Ver avaliações</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
