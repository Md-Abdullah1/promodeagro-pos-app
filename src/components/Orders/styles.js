import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexWrap: "wrap",
    // gap: 2,
    padding: 4,
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: 'center',
    // overflow: "scroll",
  },
  shadow: {
    shadowColor: '#000', // Shadow color
  shadowOffset: { width: 0, height: 2 }, // Offset of the shadow
  shadowOpacity: 0.25, // Opacity of the shadow
  shadowRadius: 3.84, // Radius of the shadow
  elevation: 5,
  },
  scrollbar: {
    width: "100%",
    height: "80%",
    paddingVertical: "10px",
    // gap: 10,
  },
  scrollLeft: {
    width: "100%",
    height: "100%",
    paddingVertical: "10px",
    // gap: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "",
    alignItems: "center",
    overflow: "scroll",
    padding: 10,
  },

  box: {
    padding: 10,
    // gap: 10,
  },
  bgDark: {
    backgroundColor: "#31572c",
  },
  bgLight: {
    backgroundColor: "#d8f3dc",
  },
  light: {
    color: "#d8f3dc",
  },
  white: {
    color: "white",
  },
  dark: {
    color: "#31572c",
  },
 
  boldText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    // marginBottom: 10,
    // paddingHorizontal: 10,
    // paddingVertical: 8,
    borderRadius: 5,
  },

  border: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 2,
  },
  gap: {
    // gap: 10,
  },
  arrowbox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  status: {
    flex: 1,
    flexDirection: "row",
    // gap: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
  },
  statusbox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#31572c",
    backgroundColor: "#d8f3dc",
    borderRadius: 20,
    width: "auto",
    height: "40%",
    padding: 8,
    paddingVertical: 8,
    // gap: 10,
  },
  statusbar:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#31572c",
    backgroundColor: "#d8f3dc",
    borderRadius: 20,
    width: "auto",
    // height: "40%",
    padding: 8,
    paddingVertical: 8,
    // gap: 10,

  },
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
    backgroundColor:'#FFF2E8',
  }

});
