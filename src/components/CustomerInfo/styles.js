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
    searchBar:{
      width:'65%',
      // height:'100%',
      
    },
    searchBarFocused: {
      // Change the border color when input is focused
      borderColor:'#9F9F9E',
      borderWidth: 1, // You can adjust the border width as needed
    },
   input:{
    borderWidth: 0.3,
    borderColor: '#171826',
    color: '#171826',
    borderRadius:3,
   },
   container:{
    width:'100%',
    height:'100%',
   },
   leftPart:{
    width:'60%',
    height:'100%' 
  },
  rightPart:{
    width:'35%',
    height:'100%' 
   },
   inputBoxFull:{
    flex:1,
    alignItems:'flex-start',
    justifyContent:'flex-start',
    width:'100%',
    maxHeight:'15%',
   },
   inputBoxHalf:{
    flex:1,
    // alignItems:'flex-start',
    // justifyContent:'flex-start',
    maxWidth:'40%',
   },
   inputBoxes:{
    width:'100%',
    maxHeight:'15%',
    flex:1,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',

   },
   lower:{
     height:"82%",
     width:'100%',
    },
    upper:{
     height:'10%',
     width:'100%'
   },
   profile:{
    width:'30%',
   },
   smallBox:{
    width:'10%',


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