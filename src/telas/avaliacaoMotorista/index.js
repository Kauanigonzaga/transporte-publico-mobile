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
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>INFORMAÇÕES</Text>
      </View>

      {/* Conteúdo */}
      <View style={styles.content}>
        
        {/* Imagem motorista */}
        <Image
          source={require('../../../assets/motorista.png')}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Infos */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>NOME: Joao Paulo Silva</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>LINHA: Azul</Text>
        </View>

        {/* Avaliação */}
        <View style={styles.avaliacaoContainer}>
          <View style={styles.linha} />
          <Text style={styles.avaliacaoText}>Avalie seu desempenho</Text>
          <View style={styles.linha} />
        </View>

        {/* Input */}
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

        {/* Botão */}
        <TouchableOpacity 
        style={styles.botaoVer}>

          <Text style={styles.textoVer}>Ver avaliações</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
