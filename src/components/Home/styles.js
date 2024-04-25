import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexWrap: "wrap",
    // gap:2,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    overflow: "scroll",
    paddingVertical: 50, 
    paddingHorizontal: 10,
    // alignItems:"center"
  },
  shadow: {
    shadowColor: "#ddd",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },

  box: {
    width: "45%",
    height:150,
    // textAlign: "center",
    borderRadius: 10,
    // marginLeft: 4,
    // marginBottom: 4,
    
    margin:8,
   
    padding: 10,
    
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  bgDark: {
    backgroundColor: "#31572c",
  },
  bgLight: {
    backgroundColor: "#d8f3dc",
  },
  light:{
    color: "#d8f3dc",
  },
  white: {
    color: "white",
  },
  dark: {
    color: "#31572c",
  },
  active:{
    borderWidth: 1,
    borderColor: '#31572c',
 
  },
  header: {
    width: "100%",
    
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#d8f3dc",
    // paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 12,
  },
  boldText: {
    fontSize: 20,
    fontWeight: "bold",
    padding:10
  },
  logo: {
    width: 50,
    height: 50,
  },

  customerDetails: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#f5f5f5",
  },
  textInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    // marginBottom: 10,
    // paddingHorizontal: 10,
    // paddingVertical: 8,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  shipToCheckbox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  shipToText: {
    marginLeft: 10,
  },
  discountInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    backgroundColor: "#f5f5f5",
  },
  discountSymbol: {
    marginLeft: 10,
  },
  addTileButton: {
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  goToCartButton: {
    position:"absolute",
    bottom:20,
   
  
    // padding: 10,
    borderRadius: 5,
    width: "100%",
    height:"10%",
    justifyContent: "center",

    alignItems: "center",
    textAlign:"center",
  },
  navigation: {
    // Navigation styles here
  },
});
