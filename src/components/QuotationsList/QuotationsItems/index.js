import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './style'

export default function QuotationItems(props){
  return(
    <View style={styles.mainContent}>

      <View style={styles.contextLeft}>

        <View style={styles.boxLogo}>
          <Image source={require('../../../img/bitcoin.png')} style={styles.logBitcoin}/>
          <Text style={styles.dayCotation}>{props.data}</Text>
        </View>

      </View>
        
      <View style={styles.contextRight}>
        <Text style={styles.price}>$ {props.valor}</Text>
      </View>
        

    </View>
  )
}