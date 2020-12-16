import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';
const Inicio = ({navigation}) => {

const informacion = {
    clienteId: 5000, totalpagar: 500
}
  console.log(navigation);
  const visitarNosotros = () => {
    navigation.navigate('Nosotros', informacion);
      
  };
  return (
    <View style= {styles.contenedor}>
      <Text>Desde inicio</Text>
      <Button title="Ir a nosotros" onPress={() => visitarNosotros()}></Button>
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
export default Inicio;
