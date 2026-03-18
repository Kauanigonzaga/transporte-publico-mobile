import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../telas/login';
import Home from '../telas/home';
import HomeMotorista from '../telas/homeMotorista';
import Linhas from '../telas/linhas';
import Rotas from '../telas/rotas';
import Pontos from '../telas/pontos';
import AvaliacaoMotorista from '../telas/avaliacaoMotorista';

const Stack = createNativeStackNavigator();


function RootStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HomeMotorista" component={HomeMotorista} />
      <Stack.Screen name="Linhas" component={Linhas} />
     <Stack.Screen name="Rotas" component={Rotas} />
        <Stack.Screen name="Pontos" component={Pontos} />
        <Stack.Screen name="AvaliacaoMotorista" component={AvaliacaoMotorista} />
    </Stack.Navigator>
  );
}
export default RootStack;

