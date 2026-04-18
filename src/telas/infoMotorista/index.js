
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

export default function InfoMotorista() {
  const [avaliacao, setAvaliacao] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.textoVoltar}>← voltar</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>Informações do Motorista</Text>
      </View>

      {/* CONTEÚDO */}
      <View style={styles.card}>

        {/* FOTO + INFO */}
        <View style={styles.topo}>
          <Image
            source={require('../../../assets/imgMotorista.png')}
            style={styles.image}
          />

          <View style={styles.info}>
            <View style={styles.infoBox}>
              <Text style={styles.label}>Nome</Text>
              <Text style={styles.valor}>João Paulo</Text>
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.label}>Linha</Text>
              <Text style={styles.valor}>Azul</Text>
            </View>

            <Text style={styles.estrelas}> ⭐ 4.8 de 5
            </Text>
          </View>
        </View>

        {/* TEXTO */}
        <Text style={styles.avaliacaoText}>
          Avalie o desempenho do motorista
        </Text>

        {/* INPUT */}
        <TextInput
          placeholder="Digite sua avaliação..."
          style={styles.input}
          value={avaliacao}
          onChangeText={setAvaliacao}
          multiline
        />

        {/* BOTÃO ENVIAR */}
        <TouchableOpacity style={styles.botaoEnviar}>
          <Text style={styles.textoBotao}>Enviar Avaliação</Text>
        </TouchableOpacity>

        {/* VER AVALIAÇÕES */}
        <TouchableOpacity
          style={styles.botaoVer}
          onPress={() => navigation.navigate('AvaliacoesMotorista')}
        >
          <Text style={styles.textoVer}>Ver avaliações</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}