import React from 'react';
import {View, Text} from 'react-native';

import styles from './style';

export default function CurrentPrice(props){

console.log(props.listTransactions)

const coin = props.infoDataGraphic

  return(
    <View style={styles.headerPrice}>
      <Text style={styles.currentPrice} data={props.infoDataGraphic}>$ {coin.slice(-1)[0]}</Text>
      <Text style={styles.textPrice}>ultima cotação</Text>
    </View>
  )
}