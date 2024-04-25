import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  maincon: {
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Imgcontainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'space-between',
    justifyContent: 'space-between',
    //    margin:10,
    width: '100%',
  },
  Img: {
    border: 2,
    borderColor: 'gray',
  },
  EditCat: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'space-between',
    justifyContent: 'space-between',
    // margin:10,
    width: '100%',
  },
  textInputStyle: {
    borderWidth: 2,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 8,
  },
});
