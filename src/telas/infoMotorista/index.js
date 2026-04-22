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
  const [avaliacoes, setAvaliacoes] = useState([]);
  const [nota, setNota] = useState(0);

  const navigation = useNavigation();

  // ⭐ média automática
  const media =
    avaliacoes.length > 0
      ? (
          avaliacoes.reduce((acc, item) => acc + item.nota, 0) /
          avaliacoes.length
        ).toFixed(1)
      : 0;

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

            {/* ⭐ MÉDIA */}
            <Text style={styles.estrelas}>
              ⭐ {media} de 5
            </Text>
          </View>
        </View>

        {/* TEXTO */}
        <Text style={styles.avaliacaoText}>
          Avalie o desempenho do motorista
        </Text>

        {/* ⭐ ESTRELAS */}
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: 10 }}>
          {[1,2,3,4,5].map((star) => (
            <TouchableOpacity key={star} onPress={() => setNota(star)}>
              <Text
                style={{
                  fontSize: 30,
                  color: star <= nota ? '#3B82F6' : '#ccc',
                  marginHorizontal: 5,
                }}
              >
                ★
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* INPUT */}
        <TextInput
          placeholder="Digite sua avaliação..."
          style={styles.input}
          value={avaliacao}
          onChangeText={setAvaliacao}
          multiline
        />

        {/* BOTÃO ENVIAR */}
        <TouchableOpacity
          style={styles.botaoEnviar}
          onPress={() => {
            if (nota === 0) {
              alert('Selecione uma nota!');
              return;
            }

            const nova = {
              nota,
              comentario: avaliacao,
              data: new Date().toLocaleString(),
            };

            const listaAtualizada = [...avaliacoes, nova];

            setAvaliacoes(listaAtualizada);
            setNota(0);
            setAvaliacao('');

            navigation.navigate('AvaliacoesMotorista', {
              avaliacoes: listaAtualizada,
            });
          }}
        >
          <Text style={styles.textoBotao}>Enviar Avaliação</Text>
        </TouchableOpacity>

        {/* VER AVALIAÇÕES */}
        <TouchableOpacity
          style={styles.botaoVer}
          onPress={() =>
            navigation.navigate('AvaliacoesMotorista', {
              avaliacoes,
            })
          }
        >
          <Text style={styles.textoVer}>Ver avaliações</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}