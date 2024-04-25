
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexWrap: "wrap",
    // gap:2,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    // alignItems: 'center',
    color:"black",
    overflow: "scroll",
  },
  shadow: {
    shadowColor: "#ddd",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },

  box: {
    width: "100%",
    // height: "100px",
    // textAlign: "center",
    borderRadius: 10,
    marginLeft: 4,
    marginBottom: 4,
    margintop: 0,
   
    padding: 10,
    
    alignItems: "center",
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
     
      boldText: {
        fontSize: 20,
        fontWeight: "bold",
      },
      flexRow:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
});