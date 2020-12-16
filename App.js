import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Inicio from './views/Inicio'
import Nosotros from './views/Nosotros'
const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer initialRouteName="Inicio">
        <Stack.Navigator> 
          <Stack.Screen name="Inicio" component={Inicio} options={{title: "Componente principal", headerTitleAlign: "center", headerStyle: {
            backgroundColor: "#F4511E"
          }, headerTintColor: '#fff', headerTitleStyle: {
            fontWeight: 'bold'}
          }} />
          <Stack.Screen name="Nosotros" component={Nosotros}  options={ ({route}) =>({title: route.params.clienteId})}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
/* si queremos aplicar las propiedades de estilo en todos lo sheader es desde aqui pero en lugar de option es con screenOptions*/
const styles = StyleSheet.create({});

export default App;
