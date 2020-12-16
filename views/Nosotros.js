import React from 'react';
import {StyleSheet, ScrollView, View, Text, Button} from 'react-native';
const Nosotros = ( {navigation, route}) => {

    const { clienteId } = route.params;

    console.log(route)
    const volver = () => {
        navigation.navigate('Inicio');
     // navigation.goBack();
       //navigation.push('Inicio');
      };
  return (
    <View  style= {styles.contenedor}>
      <Text>{clienteId}</Text>
      <Button title="Volver" onPress={() => volver()}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Nosotros;
