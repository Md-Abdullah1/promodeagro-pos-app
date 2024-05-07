import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  
    textPrimary: {
      color: '#FC8019',
    },
    bgPrimary: {
      backgroundColor: '#FC8019',
    },
    textSecondary: {
      color: '#09AA29',
    },
    bgSecondary: {
      backgroundColor: '#09AA29',
    },
    textTertiary: {
      color: '#FFF2E8',
    },
    bgTertiary: {
      backgroundColor: '#FFF2E8',
    },
    textBlack: {
      color: '#171826',
    },
    bgBlack: {
      backgroundColor: '#171826',
    },
    textGrey: {
      color: '#9F9F9E',
    },
    bgGrey: {
      backgroundColor: '#9F9F9E',
    },
    textWhite: {
      color: '#F5F5F5',
    },
    bgWhite: {
      backgroundColor: '#F5F5F5',
    },
    bgPureWhite: {
      backgroundColor: '#FFFFFF',
    },
    header:{
      height:'10%',
      width:'100%',
      position: 'absolute',
       top: 0,
        left: 0,
         right: 0 ,
    },
    headerRight:{
      width:'50%',
    },
    searchBar:{
      width:'65%',
      // height:'100%',
      borderColor:'#9F9F9E',
      
    },

    table:{
      width:'100%',
      overflow:'scroll',
    },
    menu:{
      position:'absolute',
      right:0,
      top:0,
      shadowColor:'#000',
      shadowOffset: { width: 2, height: 4 }, 
      shadowOpacity: 0.50, 
      shadowRadius: 3.84, 
      elevation: 5,
    },
    menuItem: {
      flexDirection: 'row', 
      borderBottomColor:'#9F9F9E',
      // borderWidth:1,
    },
    backdrop: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modal:{
      width:'35%',
      height:'35%',
      
    },
    borderButton:{
      borderColor:'#FC8019',
      borderWidth:1,
    }
  
})