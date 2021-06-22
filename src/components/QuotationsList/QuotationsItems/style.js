import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContent:{
    width:'95%',
    height: 'auto',
    backgroundColor: '#0000',
    marginLeft: '3%',
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 1
  },
  boxLogo:{
    flexDirection:'row',
    alignItems: 'center',
  },
  logBitcoin:{
    width: 40,
    height: 40,
    marginLeft: 2,
  },
  contextLeft:{
    width: '36%',
    height: '100%',
    alignContent: 'flex-start',
  },
  contextRight:{
    width: '60%',
    alignItems: 'flex-end',
  },
  dayCotation:{
    fontSize: 16,
    paddingLeft: 3,
    color:'#FFFF',
    fontWeight: 'bold',
  },
  price:{
    fontSize: 18,
    paddingRight: 2,
    color:'#FFFF',
    fontWeight: 'bold',
  }
})