import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';

import CorrentPrice from './src/components/CurrentPrice/index';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationsList from './src/components/QuotationsList';
import QuotationItems from './src/components/QuotationsList/QuotationsItems';

function addZero(number){
  if(number <= 9){
    return '0' + number
  }
  return number;
}

function url(qtdDays){
  const date = new Date();
  const listLastDays = qtdDays;
  const end_date = `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDay())}`;
  date.setDate(date.getDate() - listLastDays);
  const start_date = `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDay())}`;

  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`
}

async function getListCoins(url){
  let response = await fecth(url);
  let returnApi = await response.json();
  let selectListQuotations = returnApi.bpi;
  const queryCoinsList = Object.keys(selectListQuotations).map((key)=>{
    return{

      data: key.split('-').reverse().join("/"),
      valor: selectListQuotations[key]
      
    }
  })
  let data= queryCoinsList.reverse();
  return data;
}

async function getPriceCoinsGraphic(url){
  let responseG = await fecth(url);
  let returnApiG = await responseG.json();
  let selectListQuotationsG = returnApiG.bpi;
  const queryCoinsList = Object.keys(selectListQuotationsG).map((key)=>{
  selectListQuotationsG[key]   
  })
  let dataG= queryCoinsList;
  return dataG;
}

export default function App() {
  const [coinsList, setCoinsList] = useState([]);
  const [coinsGraphicList, setCoinsGraphicList] = useState([0]);
  const [days, setDays] = useState(30);
  const [upDateData,setUpDateData] = useState(true);

  function updateDay(number){
    setDays(number);
    setUpDateData(true)
  }  

  useEffect(()=>{

    getListCoins(url(days)).then((data)=>{
      setCoinsList(data)
    });

    getPriceCoinsGraphic(url(days)).then((dataG)=>{
      setCoinsGraphicList(dataG)
    });

    if(upDateData){
      setUpDateData(false)
    }

  },[upDateData]);
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
      backgroundColor='#f50d41'
      barStyle='dark-content'
      />
      <CorrentPrice/>
      <HistoryGraphic/>
      <QuotationsList/>
      <QuotationItems/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});


