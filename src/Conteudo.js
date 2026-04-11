import React from 'react';
import { ScrollView } from 'react-native';
import { estilos } from './styleSheet/estilos';
import Item from './Item';

function Conteudo() {
  let itemConteudo = null;

  let ArrayPaises = [
    'Brasil',
    'China',
    'Japão',
    'Portugal',
    'Itália',
    'Alemanha',
    'Argentina',
    'Canadá',
    'Índia',
    'Austrália'
  ];

  let ArrayHabitantes = [
    '203 milhões',
    '1,4 bilhão',
    '123 milhões',
    '10 milhões',
    '59 milhões',
    '83 milhões',
    '46 milhões',
    '40 milhões',
    '1,4 bilhão',
    '26 milhões'
  ];

  let ArrayPIB = [
    'R$ 10,9 trilhões',
    'R$ 90,3 trilhões',
    'R$ 21,4 trilhões',
    'R$ 1,4 trilhão',
    'R$ 11,5 trilhões',
    'R$ 23,0 trilhões',
    'R$ 3,2 trilhões',
    'R$ 10,8 trilhões',
    'R$ 17,9 trilhões',
    'R$ 8,7 trilhões'
  ];

  let ArrayBandeiras = [
    require('../img/brasil.jpg'),
    require('../img/china.png'),
    require('../img/japao.png'),
    require('../img/portugal.png'),
    require('../img/italia.png'),
    require('../img/alemanha.png'),
    require('../img/argentina.png'),
    require('../img/canada.png'),
    require('../img/india.png'),
    require('../img/australia.jpg')
  ];

  let ArrayCores = [
    'green',
    'red',
    'white',
    'darkgreen',
    'green',
    'black',
    'skyblue',
    'red',
    'orange',
    'navy'
  ];

  let ArrayCoresTexto = [
    'white',
    'yellow',
    'red',
    'white',
    'white',
    'yellow',
    'black',
    'white',
    'black',
    'white'
  ];

  for (let i = 0; i < ArrayPaises.length; i++) {
    itemConteudo = (
      <>
        {itemConteudo}
        <Item
          nomePais={ArrayPaises[i]}
          bandeira={ArrayBandeiras[i]}
          habitantes={ArrayHabitantes[i]}
          pib={ArrayPIB[i]}
          corFundo={ArrayCores[i]}
          corTexto={ArrayCoresTexto[i]}
        />
      </>
    );
  }

  return (
    <ScrollView style={estilos.conteudo}>
      {itemConteudo}
    </ScrollView>
  );
}

export default Conteudo;