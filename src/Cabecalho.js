import React from 'react';
import { View, Text, Image } from 'react-native';
import { estilos } from './styleSheet/estilos';

function Cabecalho(props) {
  return (
    <View style={estilos.cabecalho}>
      <Text style={estilos.cabSubTitulo}>DSV MOBILE</Text>
      <Image source={props.imagem} style={estilos.cabImagem} />
      <Text style={estilos.cabTitulo}>FUNDAMENTOS II</Text>
    </View>
  );
}

export default Cabecalho;