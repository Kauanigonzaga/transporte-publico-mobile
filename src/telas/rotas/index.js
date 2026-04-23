//DUDA

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
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
        <WebView
        source={{ uri: 'https://www.google.com/maps/d/embed?mid=1PZnUg7Xd-2Y_LuZgKu0I8XBxSUJqOGg&ehbc=2E312F' }}
        style={{ flex: 1 }}/>
        </View>

        {/* FOOTER */}
        <View style={styles.footer} />

      </View>
    </SafeAreaView>
  );
}


