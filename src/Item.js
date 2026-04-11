import React from 'react';
import { View, Text, Image } from 'react-native';

function Item(props) {
  return (
    <View
      style={{
        backgroundColor: props.corFundo,
        marginTop: 10,
        width: '100%',
        padding: 10
      }}
    >
      <Image
        source={props.bandeira}
        style={{ width: 80, height: 50, marginBottom: 10 }}
      />

      <Text style={{ color: props.corTexto, fontSize: 24 }}>
        País: {props.nomePais}
      </Text>

      <Text style={{ color: props.corTexto, fontSize: 18 }}>
        Habitantes: {props.habitantes}
      </Text>

      <Text style={{ color: props.corTexto, fontSize: 18 }}>
        PIB: {props.pib}
      </Text>
    </View>
  );
}

export default Item;