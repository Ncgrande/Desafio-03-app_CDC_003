import React from 'react';
import { View, Text } from 'react-native';
import { estilos } from './styleSheet/estilos';

function Rodape(props) {
  return (
    <View style={estilos.rodape}>
      <Text style={estilos.rodTexto}>{props.nome}</Text>
      <Text style={estilos.rodTexto}>{props.data}</Text>
    </View>
  );
}

export default Rodape;