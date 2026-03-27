import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity,ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles.js';
import  Image from '../../../assets/imgMotorista.png';
// import MapView from 'react-native-maps';

export default function RotasScreen() {
    const navigation = useNavigation();

  return (

    <ImageBackground source={ Image } style={styles.logo}> 
    
    <SafeAreaView style={styles.screen}>

        {/*<Stack.Navigator>
            <Stack.Screen name="Pontos" component={pontos} />
        </Stack.Navigator>*/}

      <View style={styles.panel}>
        <View style={styles.topBar}>
          <View style={styles.motoristaBox}>
            <Text style={styles.motoristaText}>MOTORISTA</Text>
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
     </ImageBackground> 
  );
}



