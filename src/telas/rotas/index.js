import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles.js';
import image from '../../../assets/imgMotorista.png';
// import MapView from 'react-native-maps';

export default function RotasScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.screen}>

      {/*<Stack.Navigator>
            <Stack.Screen name="Pontos" component={pontos} />
        </Stack.Navigator>*/}

      <View style={styles.panel}>
        <View style={styles.topBar}>
          <View style={styles.motoristaBox}>

            <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('avaliacaoMotorista')}>
            <Text style={styles.menuButtonText}>MOTORISTA</Text>
            </TouchableOpacity>
            
            <Image source={image} style={styles.logo} />
          </View>

          <View style={styles.menuBox}>
            <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.menuButtonText}>HOME</Text>
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



