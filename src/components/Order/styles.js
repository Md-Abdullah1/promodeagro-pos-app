import { StyleSheet } from "react-native";

export default StyleSheet.create({
  statusbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#31572c',
    backgroundColor: '#d8f3dc',
    borderRadius: 20,
    width: '100px',
    // height: "40%",
    padding: 8,
    paddingVertical: 8,
    gap: 10,
  },
  textColor: {
    color: '#31572c',
  },
  container:{
    display:"flex",
    gap: 10,
    marginTop: 5,
    marginLeft : 5,
    backgroundColor:"white",
    padding:10,
  },
  valueText:{
    fontWeight:"bold"
  }
  ,
  iconIndicators:{
    display:"flex",
    marginTop:5,
    flexDirection:"row",
    gap:10
  }
});

