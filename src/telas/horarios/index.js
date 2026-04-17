
import { View, Text, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from './styles.js';

const linhas = [
  {
    id: 1,
    nome: "Linha Roxa",
    pontos: [
      {
        nome: "Rodoviária",
        horarios: ["08:00", "09:00", "10:00", "11:00", "12:00"]
      },
      {
        nome: "Mercado Central",
        horarios: ["08:10", "09:10", "10:10", "11:10"]
      }
    ]
  },
  {
    id: 2,
    nome: "Linha Azul",
    pontos: [
      {
        nome: "Escola",
        horarios: ["08:20", "09:20", "10:20"]
      }
    ]
  },
  {
    id: 3,
    nome: "Linha Laranja",
    pontos: [
      {
        nome: "Terminal",
        horarios: ["07:00", "08:00", "09:00"]
      }
    ]
  },
  {
    id: 4,
    nome: "Linha Amarela",
    pontos: [
      {
        nome: "Centro",
        horarios: ["06:30", "07:30", "08:30"]
      }, {
        nome: "Escola",
        horarios: ["08:20", "09:20", "10:20"]
      }
    ]
  }
];

export default function Horarios() {
  const navigation = useNavigation();

  return (

    <View style={styles.fundo}>

      {/* HEADER */}
      <View style={styles.header}> 
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.botao}>← Voltar</Text>
        </TouchableOpacity>
      </View>

      {/* CONTEÚDO */}
      <ScrollView contentContainerStyle={styles.container}>
        {linhas.map((linha) => (
          <View key={linha.id} style={styles.linha}>

            <Text style={styles.tituloLinha}>{linha.nome}</Text>

            {linha.pontos.map((ponto, index) => (
              <View key={index} style={styles.card}>

                <View style={styles.topo}>
                  <Text style={styles.nome}>{ponto.nome}</Text>
                </View>

                <View style={styles.horarios}>
                  {ponto.horarios.map((hora, i) => (
                    <Text key={i} style={styles.hora}>
                      {hora}
                    </Text>
                  ))}
                </View>

              </View>
            ))}

          </View>
        ))}
      </ScrollView>

    </View>
  );
}