import 'react-native-gesture-handler';
import React from 'react';
import {View,Text,StatusBar} from 'react-native';

//React Navigation
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Inicio from './views/Inicio'
import Detalle from './views/Detalle'

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Inicio"
        >
          <Stack.Screen
            name="Inicio"
            component={Inicio}
            options={{
              title: "Peliculas",
              headerStyle: {
                backgroundColor: 'blue'
              },
              headerTintColor: '#fff'
            }}
          />
           <Stack.Screen
            name="Detalle"
            component={Detalle}
            options={{
              title: "Sinopsis",
              headerStyle: {
                backgroundColor: 'blue'
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
