//DUDA

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import image from '../../../assets/imgMotorista.png';

export default function RotasScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>

        {/* HEADER */}
        <View style={styles.header}>
          
          <View style={styles.motoristaSection}>
            <Image source={image} style={styles.avatar} />
            
            <TouchableOpacity 
              style={styles.primaryButton}
              onPress={() => navigation.navigate('InfoMotorista')}>
              <Text style={styles.buttonText}>Motorista</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            style={styles.secondaryButton}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Início</Text>
          </TouchableOpacity>

        </View>

        {/* MAPA */}
        <View style={styles.mapContainer}>
          <View style={styles.fakeMap}>
            <Text style={styles.mapText}>Mapa</Text>
          </View>
        </View>

        {/* FOOTER */}
        <View style={styles.footer} />

      </View>
    </SafeAreaView>
  );
}


