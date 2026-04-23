import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";

import styles from "./styles";

export default function HomeMotorista() {
  const navigation = useNavigation();
  const [avaliacoes, setAvaliacoes] = useState([]);

  return (
    <SafeAreaView style={styles.container}>

      {/* Botão de voltar com caixa */}
      <TouchableOpacity 
          style={styles.voltarBox}
          onPress={() => navigation.navigate('Home')}>
          
          <Text style={styles.voltarTexto}>Home</Text>
      </TouchableOpacity>
      
      <View style={styles.header}>

        <Image source={{ uri: "https://i.pravatar.cc/150?img=12" }} style={styles.avatar}/>

        <Text style={styles.nome}>João Motorista</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Informações do Motorista</Text>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>CPF</Text>
          <Text style={styles.infoValue}>123.456.789-00</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>CNH</Text>
          <Text style={styles.infoValue}>00000000000</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Linha</Text>
          <Text style={styles.infoValue}>AZUL</Text>
        </View>
      </View>

      <View style={styles.avaliacoesContainer}>
        <TouchableOpacity style={styles.botaoAvaliacoes} onPress={() => navigation.navigate('AvaliacoesMotorista', {avaliacoes,})}>
            <Text style={styles.textoBotao}>Ver Avaliações</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

  