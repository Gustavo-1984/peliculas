import 'react-native-gesture-handler';
import React from 'react';


//React Navigation
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Inicio from './views/Inicio'
import Detalle from './views/Detalle'
import Login from './views/Login'
import Barra from './views/Barra'
import Favoritos from './views/Favoritos'

// Stack de navegacion
const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
        >
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={({navigation, route}) =>({
              headerStyle:{
                backgroundColor: 'black'
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerLeft: (props) => <Barra {...props} navigation={navigation} route={route} />                        
            })}
        />
        <Stack.Screen
            name="Detalle"
            component={Detalle}
            options={{
              title: "Sinopsis",
              headerStyle: {
                backgroundColor: 'black'
              },
              headerTitleAlign: 'center',
              headerTintColor: '#fff'
            }}
        />
        <Stack.Screen
            name="Login"
            component={Login}
            options={{
              
              headerStyle: {
                backgroundColor: 'black'
              },
              headerTintColor: '#fff'
            }}
        />
        <Stack.Screen
            name="Favoritos"
            component={Favoritos}
            options={{
              title: "Favoritos",
              headerStyle: {
                backgroundColor: 'black'
              },
              headerTintColor: '#fff'
            }}
        />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
