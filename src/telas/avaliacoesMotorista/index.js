import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { useRoute } from '@react-navigation/native';

export default function AvaliacoesMotorista() {
  const navigation = useNavigation();
  const route = useRoute();
  const avaliacoes = route.params?.avaliacoes || [];

  return (
  <View style={styles.container}>
    <View style={styles.card}>
      <Text style={styles.titulo}>Avaliações do Motorista</Text>

      {avaliacoes.length === 0 ? (
        <Text>Nenhuma avaliação ainda.</Text>
      ) : (
        avaliacoes.map((item, index) => (
          <View key={index} style={styles.avaliacaoBox}>
            <Text style={styles.texto}>{item.texto}</Text>
            <Text style={styles.data}>{item.data}</Text>
          </View>
        ))
      )}

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.voltar}>← Voltar</Text>
      </TouchableOpacity>
    </View>
  </View>
);
}