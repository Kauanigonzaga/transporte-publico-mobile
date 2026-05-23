import { useState } from 'react';
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

// Troque estes dados pelos endpoints de rotas, pontos e horarios quando a API estiver pronta.
const INITIAL_ADMIN_DATA = [
  {
    id: 'azul',
    name: 'Linha Azul',
    color: '#1D4ED8',
    route: 'Centro > Bairro A',
    points: 'Terminal Central, Av. Brasil, Escola Estadual, Bairro A',
    times: '06:40, 07:20, 08:00, 08:40',
  },
  {
    id: 'roxa',
    name: 'Linha Roxa',
    color: '#7C3AED',
    route: 'Rodoviaria > Bairro B',
    points: 'Rodoviaria, Mercado Central, Praca Central, Bairro B',
    times: '08:00, 09:00, 10:00, 11:00',
  },
  {
    id: 'amarela',
    name: 'Linha Amarela',
    color: '#EAB308',
    route: 'Bairro D > Centro',
    points: 'Bairro D, Rua das Flores, Mercado Municipal, Centro',
    times: '06:30, 07:30, 08:30, 09:30',
  },
  {
    id: 'laranja',
    name: 'Linha Laranja',
    color: '#F97316',
    route: 'Bairro C > Centro',
    points: 'Bairro C, Rua das Flores, Mercado Municipal, Centro',
    times: '07:00, 08:00, 09:00, 10:00',
  },
];

export default function HomeAdmin() {
  const navigation = useNavigation();
  const [lines, setLines] = useState(INITIAL_ADMIN_DATA);
  const [selectedLineId, setSelectedLineId] = useState(INITIAL_ADMIN_DATA[0].id);

  const selectedLine = lines.find((line) => line.id === selectedLineId) || lines[0];

  function updateSelectedLine(field, value) {
    setLines((currentLines) =>
      currentLines.map((line) =>
        line.id === selectedLine.id ? { ...line, [field]: value } : line,
      ),
    );
  }

  function handleSave() {
    // Depois, troque este trecho por PUT/PATCH para a API.
    Alert.alert('Alteracoes salvas', 'Os dados foram atualizados localmente.');
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.homeButton}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.homeButtonText}>Home</Text>
        </TouchableOpacity>

        <View style={styles.headerTextGroup}>
          <Text style={styles.brand}>BUSLY</Text>
          <Text style={styles.headerTitle}>Painel admin</Text>
        </View>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>Gerenciamento</Text>
          <Text style={styles.summaryTitle}>Editar rotas, pontos e horarios</Text>
          <Text style={styles.summaryText}>
            Selecione uma linha, ajuste as informacoes e salve. Depois esses campos
            vao alimentar o back-end.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Linhas</Text>

        <View style={styles.lineGrid}>
          {lines.map((line) => {
            const isSelected = line.id === selectedLine.id;

            return (
              <TouchableOpacity
                key={line.id}
                style={[
                  styles.lineButton,
                  isSelected && { backgroundColor: line.color },
                ]}
                activeOpacity={0.86}
                onPress={() => setSelectedLineId(line.id)}
              >
                <View
                  style={[
                    styles.lineDot,
                    { backgroundColor: isSelected ? '#FFFFFF' : line.color },
                  ]}
                />
                <Text
                  style={[
                    styles.lineButtonText,
                    isSelected && styles.lineButtonTextActive,
                  ]}
                >
                  {line.name.replace('Linha ', '')}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.formCard}>
          <Text style={styles.formTitle}>{selectedLine.name}</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nome da linha</Text>
            <TextInput
              style={styles.input}
              value={selectedLine.name}
              onChangeText={(value) => updateSelectedLine('name', value)}
              placeholder="Ex: Linha Azul"
              placeholderTextColor="#8A98A8"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Rota</Text>
            <TextInput
              style={styles.input}
              value={selectedLine.route}
              onChangeText={(value) => updateSelectedLine('route', value)}
              placeholder="Ex: Centro > Bairro A"
              placeholderTextColor="#8A98A8"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Pontos</Text>
            <TextInput
              style={styles.textArea}
              value={selectedLine.points}
              onChangeText={(value) => updateSelectedLine('points', value)}
              placeholder="Separe os pontos por virgula"
              placeholderTextColor="#8A98A8"
              multiline
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Horarios</Text>
            <TextInput
              style={styles.textArea}
              value={selectedLine.times}
              onChangeText={(value) => updateSelectedLine('times', value)}
              placeholder="Separe os horarios por virgula"
              placeholderTextColor="#8A98A8"
              multiline
            />
          </View>

          <TouchableOpacity
            style={styles.primaryButton}
            activeOpacity={0.86}
            onPress={handleSave}
          >
            <Text style={styles.primaryButtonText}>Salvar alteracoes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
