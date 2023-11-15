import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaPrincipal from './TelaPrincipal.js'
import Produto from './Produto.js'
import Pais from './Pais.js'
import Card from './Card.js'
import Uva from './Uva.js'
import Carrinho from './Carrinho.js'



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName={'TelaPrincipal'}>
        <Stack.Screen name={'TelaPrincipal'} component={TelaPrincipal} />
         <Stack.Screen name="Card" component={Card} />
        <Stack.Screen name="Pais" component={Pais} />
        <Stack.Screen name="Uva" component={Uva} />
         <Stack.Screen name="Produto" component={Produto} />
         <Stack.Screen name="Carrinho" component={Carrinho} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

