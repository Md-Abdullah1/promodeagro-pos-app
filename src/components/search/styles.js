// style.js
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Setting flex direction to row
    alignItems: 'center', // Align items in the center
    justifyContent: 'space-between', // Space between items
    // gap:10,
    // backgroundColor: 'blue',
    paddingTop: 6, // Add  padding
    paddingBottom: 0, // Add  padding
    paddingHorizontal: 4,
    height: 20,
  },
  input: {
    border: 1,
    borderWidth: 1,
    borderColor: 'gray',
    marginLeft: 30,
    borderRadius: 35,
    height: 35,
  },
});
