import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexWrap: "wrap",
    gap: 2,
    padding: 4,
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: 'center',
    // overflow: "scroll",
  },
  shadow: {
    shadowColor: "#ddd",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    // elevation: 1,
  },
  scrollbar: {
    width: "100%",
    height: "80%",
    paddingVertical: "10px",
    gap: 10,
  },
  scrollLeft: {
    width: "100%",
    height: "100%",
    paddingVertical: "10px",
    gap: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "",
    alignItems: "center",
    overflow: "scroll",
    padding: 10,
  },

  box: {
    padding: 10,
    gap: 10,
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
  header: {
    width: "100%",
    height: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
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
    gap: 10,
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
    gap: 10,
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
    gap: 10,
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
    gap: 10,

  }
});
