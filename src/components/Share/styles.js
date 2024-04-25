import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    gap: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: '100%',
    // backgroundColor:'blue',
    marginTop: '45%',
  },
  font: {
    fontSize: 18,
    fontWeight: 600,
  },
  shadow: {
    shadowColor: '#ddd',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },
  btn: {
    padding: 10,
    gap: 10,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 600,
    // width:20,
  },
  bgDark: {
    backgroundColor: '#31572c',
  },
  bgLight: {
    backgroundColor: '#d8f3dc',
  },
  light: {
    color: '#d8f3dc',
  },
  white: {
    color: 'white',
  },
  dark: {
    color: '#31572c',
  },
  header: {
    width: '100%',
    height: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  boldText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  semiBoldText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  border: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 2,
  },
  btns: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: '100%',
    flexWrap: 'wrap',
  },
});
  