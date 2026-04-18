import React, { useState } from "react";
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
  const [online, setOnline] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      
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
          <TouchableOpacity style={styles.botaoAvaliacoes}>
              <Text style={styles.textoBotao}>Ver Avaliações</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

  