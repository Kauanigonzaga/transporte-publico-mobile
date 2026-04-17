//DUDA

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function LinhasPontos() {

  const linhas = [
    {
      nome: 'Linha AZUL - Centro → Bairro A',
      descricao: 'Sai do Terminal Central, passa pela Av. Brasil, Escola Estadual e finaliza no Bairro A.',
      pontos: ['Terminal Central', 'Av. Brasil', 'Escola Estadual', 'Bairro A']
    },
    {
      nome: 'Linha ROXA - Centro → Bairro B',
      descricao: 'Sai do Terminal Central, passa pelo Hospital Municipal, Praça Central e finaliza no Bairro B.',
      pontos: ['Terminal Central', 'Hospital Municipal', 'Praça Central', 'Bairro B']
    },
    {
      nome: 'Linha LARANJA - Bairro C → Centro',
      descricao: 'Parte do Bairro C, passa pela Rua das Flores, Mercado Municipal e chega ao Centro.',
      pontos: ['Bairro C', 'Rua das Flores', 'Mercado Municipal', 'Centro']
    },
      {
      nome: 'Linha AMARELA- Bairro D → Centro',
      descricao: 'Parte do Bairro D, passa pela Rua das Flores, Mercado Municipal e chega ao Centro.',
      pontos: ['Bairro D', 'Rua das Flores', 'Mercado Municipal', 'Bairro E']
    }
  ];

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>

      <TouchableOpacity style={styles.botao} 
      onPress={() => navigation.navigate('Home')}>
        <Text style={styles.tituloBotao}>← Voltar</Text>
      </TouchableOpacity>
      
      {linhas.map((linha, index) => (
        <View key={index} style={styles.card}>
          
          <Text style={styles.nomeLinha}>{linha.nome}</Text>
          
          <Text style={styles.descricao}>
            {linha.descricao}
          </Text>

          <Text style={styles.tituloPonto}>Pontos:</Text>

          {linha.pontos.map((ponto, i) => (
            <Text key={i} style={styles.ponto}>
              • {ponto}
            </Text>
          ))}

        </View>
      ))}
    </ScrollView>
  );
}