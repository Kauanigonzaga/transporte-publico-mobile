import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

<<<<<<< Updated upstream
import HomeMotorista from './src/telas/homeMotorista';
=======
import Login from "./src/telas/login";
>>>>>>> Stashed changes

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< Updated upstream
      <HomeMotorista />
=======
      <Login />
>>>>>>> Stashed changes
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
