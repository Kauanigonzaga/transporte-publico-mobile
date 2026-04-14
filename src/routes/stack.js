import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../telas/login';
import Home from '../telas/home';
import HomeMotorista from '../telas/homeMotorista';
import Linhas from '../telas/linhas';
import Rotas from '../telas/rotas';
import Pontos from '../telas/pontos';
import Horarios from '../telas/horarios';
import AvaliacaoMotorista from '../telas/avaliacaoMotorista';

const Stack = createNativeStackNavigator();


function RootStack() {
  
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="HomeMotorista" component={HomeMotorista} options={{ headerShown: false }} />
      <Stack.Screen name="Linhas" component={Linhas} options={{ headerShown: false }}/>
      <Stack.Screen name="Rotas" component={Rotas} options={{ headerShown: false }}/>
      <Stack.Screen name="Pontos" component={Pontos} options={{ headerShown: false }}/>
      <Stack.Screen name="Horarios" component={Horarios} options={{ headerShown: false }}/>
      <Stack.Screen name="AvaliacaoMotorista" component={AvaliacaoMotorista} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}
export default RootStack;

