import React from 'react';
import { View } from 'react-native';
import { estilos } from './src/styleSheet/estilos';

import Cabecalho from './src/Cabecalho';
import Conteudo from './src/Conteudo';
import Rodape from './src/Rodape';

function App() {
  return (
    <View style={estilos.fundo}>
      <Cabecalho imagem={require('./img/images.png')} />

      <Conteudo />

      <Rodape
        nome="Fernando Santos"
        data="10/04/2026"
      />
    </View>
  );
}

export default App;