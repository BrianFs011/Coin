import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './style'

export default function QuotationItems(){
  return(
    <View style={styles.mainContent}>

      <View style={styles.contextLeft}>

        <View style={styles.boxLogo}>
          <Image source={require('../../../img/bitcoin.png')} style={styles.logBitcoin}/>
          <Text style={styles.dayCotation}>7/05/2021</Text>
        </View>

      </View>
        
      <View style={styles.contextRight}>
        <Text style={styles.price}>$326598</Text>
      </View>
        

    </View>
  )
}