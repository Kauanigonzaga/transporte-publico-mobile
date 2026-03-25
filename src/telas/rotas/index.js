import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles.js';

// import MapView from 'react-native-maps';

export default function RotasScreen() {
    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.screen}>

        {/*<Stack.Navigator>
            <Stack.Screen name="Pontos" component={pontos} />
        </Stack.Navigator>*/}

      <Text style={styles.pageTitle}>Rotas e Linhas</Text>

      <View style={styles.panel}>
        <View style={styles.topBar}>
          <View style={styles.motoristaBox}>
            <Text style={styles.motoristaText}>MOTORISTA</Text>
          </View>

          <View style={styles.logoBox}>
            {/* coloque aqui sua imagem/logo */}
            {/* <Image source={require('../assets/logo.png')} style={styles.logo} /> */}
          </View>

          <View style={styles.menuBox}>
            <TouchableOpacity style={styles.menuButton }>
              <Text style={styles.menuButtonText}>HORÁRIOS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Linhas')}>
              <Text style={styles.menuButtonText}>LINHAS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Pontos')}>
              <Text style={styles.menuButtonText}>PONTOS</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.mapArea}>
          {/* quando estiver usando mapa */}
          {/* <MapView style={styles.map} /> */}

          {/*  só para teste visual */}
          <View style={styles.fakeMap}>
            <Text style={{ color: '#666' }}>MAPA</Text>
          </View>
        </View>

        <View style={styles.bottomBar} />
      </View>
    </SafeAreaView>
  );
}





/*import { View, Text, TouchableOpacity, StyleSheet, Image }  from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
import styles from './styles.js';


export default function Rotas() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Rotas</Text>
            <TouchableOpacity>
                <Text style={styles.botao}>LINHAS</Text>
                <Text style={styles.botao}>PONTOS</Text>
                <Text style={styles.botao}>HORÁRIOS</Text>
                <Text style={styles.botao}>MOTORISTA</Text>
            </TouchableOpacity>
        </View>
    );
}*/

