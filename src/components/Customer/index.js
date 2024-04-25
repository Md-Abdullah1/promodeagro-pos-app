import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from '@react-navigation/native';
import {useSelector} from 'react-redux';
// import { fetchingCustomers } from '../../Api/fetchCustomers';
// import { addCustomer } from '../../redux/slice/customerSlice';

const Customers = () => {
  const data = useSelector(state => state.CustomerSlice.customers);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  // const [Isloading,setIsloadig] = useState(true)
  // const [customers] = useState([
  //   {id: 1, name: 'John Doe', email: 'john@gmail.com'},
  // ]);

  const navigation = useNavigation();
  const route = useRoute();
  // const currentRouteName = navigation.route.name;
  // console.log('routing name',currentRouteName)
  // const currentRoute = route.name;
  // const parentRoute = currentRoute.routes[currentRoute.index];
  // console.log('parent route',parentRoute,'cureen',currentRoute)
  console.log('customers', data);
  // const dispatch = useDispatch()
  // const  = route.params.value
  // const users = useSelector(state => state.CustomerSlice.users);

  const filterCustomers = (customers, query) => {
    if (!query) {
      return customers;
    }

    return customers.filter(
      customer =>
        (customer.name &&
          customer.name.toLowerCase().includes(query.toLowerCase())) ||
        (customer.email &&
          customer.email.toLowerCase().includes(query.toLowerCase())) ||
        (customer.phone &&
          customer.phone.toLowerCase().includes(query.toLowerCase())),
    );
  };

  const handleSearchQueryChange = query => {
    setSearchQuery(query);
    if (query) {
      setFilteredCustomers(filterCustomers(data, query));
    } else {
      setFilteredCustomers(data);
    }
  };

  // const addCustomer = () => {
  //   console.log('addCustomer');
  //   navigation.navigate('Adduser');
  // };
  const total = route.params?.total;
  const items = route.params?.items;
  const OrderData = route.params?.data
  const order = route.params?.order
  console.log('router values', total, items);
  console.log('router order value', OrderData);
  const navigateToAddUser = () => {
    console.log('Navigate to AddUser', {total: total, items: items});
    // navigation.navigate('Adduser');
    navigation.navigate('Adduser', {total: total, items: items});
  };

  // const handleItemPress = item => {
  //   console.log('Selected customer:', item);
  //   navigation.navigate('Cash', {
  //     total: total,
  //     user: item,
  //     items: items,
  //   });
  // };
  const handleItemPress = customer => {
    console.log('Selected customer:', customer);
    console.log('route nm',navigation.getState().routes[0].name)
    if(navigation.getState().routes[0].name == 'Settings')
    {
        console.log('customer details', customer)
     }
     else if( navigation.getState().routes[0].name  == 'HomePage' &&  navigation.getState().routes[1].name == 'Adduser') {
      console.log('added a new user ',customer)
     }
     else if( navigation.getState().routes[0].name  == 'Settings' &&  navigation.getState().routes[2].name == 'Adduser') {
      console.log('added a new user from settings ',customer)
     }
     else if(navigation.getState().routes[0].name == 'OrdersPage' && navigation.getState().routes[1].name == 'Order'){
      console.log('updating order status')
      navigation.navigate('Share',{order:order})
      // navigation.navigate('Share',orderId)
     }
     else{
      console.log('goint to cash to create product',{
        total: total,
        user: customer,
        items: items,
       })
       navigation.navigate('Cash', {
         total: total,
         user: customer,
         items: items,
        })  
      }
  };

  //   const fetchCustomers = async () => {
  //   try {
  //     console.log('calling fetching');
  //     const response = await fetchingCustomers();
  //     console.log('after fetching');
  //     const data = response;
  //     console.log('customers data', data);
  //     data.map(value => {
  //       console.log('customer value', value);
  //       dispatch(addCustomer(value));
  //     });
  //     setIsloadig(false)
  //   } catch (error) {
  //     console.log('orders error', error);
  //   }
  // };

  useEffect(() => {
    setFilteredCustomers(filterCustomers(data, searchQuery));
    // fetchCustomers()
  }, [data, searchQuery]);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     setSearchQuery('');
  //     setFilteredCustomers(data);
  //   }, [data])
  // );

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.customerContainer}
      onPress={() => handleItemPress(item)}>
      <View style={styles.customerInfo}>
        <Text style={styles.customerName}>{item.name}</Text>
        <Text style={styles.customerEmail}>+91 {item.phone}</Text>
      </View>
      <Text>
        <Icon name="arrow-forward" />
      </Text>
    </TouchableOpacity>
  );

  // if (Isloading) {
  //   return (
  //     <View style={[styles.container, styles.loadingContainer]}>
  //       <ActivityIndicator size="large" color="#0000ff" />
  //     </View>
  //   );
  // }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for customers..."
        placeholderTextColor="black"

        value={searchQuery}
        onChangeText={handleSearchQueryChange}
      />
      <FlatList
        data={filteredCustomers}
        renderItem={renderItem}
        keyExtractor={item => item?.id.toString()+'-'+Math.random()}
      />
      <Pressable
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 5,
          marginTop: 10,
        }}
        onPress={navigateToAddUser}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
          Add Customer
        </Text>
      </Pressable>
    </View>
  );
};

export default Customers;

const styles = {
  container: {
    flex: 1,
    padding: 16,
    marginTop: 25,
    color: 'black',
  },
  input: {
    marginBottom: 16,
    padding: 10,
    borderWidth: 1,
    color:'black'
  },
  customerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  customerInfo: {
    flex: 1,
  },
  customerName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: 'black',
  },
  customerEmail: {
    fontSize: 14,
    color: '#666',
  },
};
