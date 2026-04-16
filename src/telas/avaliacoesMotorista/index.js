import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AvaliacoesMotorista() {
  const navigation = useNavigation();

  const [nota, setNota] = useState(0);
  const [hover, setHover] = useState(0); // no mobile não precisa muito, mas deixei simples
  const [comentario, setComentario] = useState('');

  function enviarAvaliacao() {
    if (nota === 0) {
      alert('Selecione uma nota!');
      return;
    }

    alert('Avaliação enviada!');
    setNota(0);
    setComentario('');
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.card}>
        <Text style={styles.titulo}>Avaliar Motorista</Text>

        {/* ESTRELAS */}
        <View style={styles.estrelas}>
          {[1,2,3,4,5].map((star) => (
            <TouchableOpacity key={star} onPress={() => setNota(star)}>
              <Text style={star <= nota ? styles.ativa : styles.inativa}>
                ★
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* INPUT */}
        <TextInput
          style={styles.input}
          placeholder="Escreva um comentário (opcional)"
          value={comentario}
          onChangeText={setComentario}
          multiline
        />

        {/* BOTÕES */}
        <TouchableOpacity style={styles.botao} onPress={enviarAvaliacao}>
          <Text style={styles.textoBotao}>Enviar Avaliação</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoSecundario}
          onPress={() => navigation.navigate('AvaliacoesMotorista')}
        >
          <Text style={styles.textoSecundario}>Ver avaliações anteriores</Text>
        </TouchableOpacity>

        {/* VOLTAR */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.voltar}>← Voltar</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}