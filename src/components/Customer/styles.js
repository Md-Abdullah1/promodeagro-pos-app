import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  orderTitle: {
    fontSize: 20,
    ///
    paddingBottom: 10,
  },
  orderListItem: {
    padding: 15,
  },
  ///,
  orderId: {
    paddingBottom: 20,
  },

  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  customerItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  CustomerName: {
    flex: 1,
    // flexDirection:"row",
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
  },
  NameEmail: {
    // alignSelf:"flex-start"
  },
  BodyCustomer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
