import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

<<<<<<< HEAD
/*import HomeMotorista from './src/telas/homeMotorista';*/
import Rotas from './src/telas/rotas';
=======
<<<<<<< Updated upstream
import HomeMotorista from './src/telas/homeMotorista';
=======
import Login from "./src/telas/login";
>>>>>>> Stashed changes
>>>>>>> 8ae9ac27273e4a8a1fb3bbc00ad2e429513e0265

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Rotas />
=======
<<<<<<< Updated upstream
      <HomeMotorista />
=======
      <Login />
>>>>>>> Stashed changes
>>>>>>> 8ae9ac27273e4a8a1fb3bbc00ad2e429513e0265
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
