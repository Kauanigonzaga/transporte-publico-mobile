import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../telas/login';
import Home from '../telas/home';
import HomeMotorista from '../telas/homeMotorista';
import LinhasPontos from '../telas/linhasPontos';
import Rotas from '../telas/rotas';
import Horarios from '../telas/horarios';
import InfoMotorista from '../telas/infoMotorista';
import AvaliacoesMotorista from '../telas/avaliacoesMotorista';

const Stack = createNativeStackNavigator();


function RootStack() {
  
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="HomeMotorista" component={HomeMotorista} options={{ headerShown: false }} />
      <Stack.Screen name="LinhasPontos" component={LinhasPontos} options={{ headerShown: false }}/>
      <Stack.Screen name="Rotas" component={Rotas} options={{ headerShown: false }}/>
      <Stack.Screen name="Horarios" component={Horarios} options={{ headerShown: false }}/>
      <Stack.Screen name="InfoMotorista" component={InfoMotorista} options={{ headerShown: false }}/>
      <Stack.Screen name="AvaliacoesMotorista" component={AvaliacoesMotorista} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}
export default RootStack;

