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
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {s} from 'react-native-wind';
import styles from './styles';
const Customers = () => {
  const data = useSelector(state => state.CustomerSlice.customers);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCustomers, setFilteredCustomers] = useState([]);

  const navigation = useNavigation();
  const route = useRoute();
  console.log('customers', data);

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

  const total = route.params?.total;
  const items = route.params?.items;
  const OrderData = route.params?.data;
  const order = route.params?.order;
  console.log('router values', total, items);
  console.log('router order value', OrderData);
  const navigateToAddUser = () => {
    console.log('Navigate to AddUser', {total: total, items: items});
    // navigation.navigate('Adduser');
    navigation.navigate('Adduser', {total: total, items: items});
  };

  const handleItemPress = customer => {
    console.log('Selected customer:', customer);
    console.log('route nm', navigation.getState().routes[0].name);
    if (navigation.getState().routes[0].name == 'Settings') {
      console.log('customer details', customer);
    } else if (
      navigation.getState().routes[0].name == 'HomePage' &&
      navigation.getState().routes[1].name == 'Adduser'
    ) {
      console.log('added a new user ', customer);
    } else if (
      navigation.getState().routes[0].name == 'Settings' &&
      navigation.getState().routes[2].name == 'Adduser'
    ) {
      console.log('added a new user from settings ', customer);
    } else if (
      navigation.getState().routes[0].name == 'OrdersPage' &&
      navigation.getState().routes[1].name == 'Order'
    ) {
      console.log('updating order status');
      navigation.navigate('Share', {order: order});
      // navigation.navigate('Share',orderId)
    } else {
      console.log('goint to cash to create product', {
        total: total,
        user: customer,
        items: items,
      });
      navigation.navigate('Cash', {
        total: total,
        user: customer,
        items: items,
      });
    }
  };

  useEffect(() => {
    setFilteredCustomers(filterCustomers(data, searchQuery));
    // fetchCustomers()
  }, [data, searchQuery]);

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

  return (
    <ScrollView style={[s`bg-white`]}>
      <View style={[s`bg-gray-200 flex flex-row justify-between p-2 m-2 `]}>
        <Text
          style={[s`text-lg p-2 w-fit h-fit text-center`, styles.textPrimary]}>
          ID
        </Text>
        <Text style={[s`text-lg p-2 `, styles.textPrimary]}>Customer Name</Text>
        <Text style={[s`text-lg p-2 `, styles.textPrimary]}>Email</Text>
        <Text style={[s`text-lg p-2 `, styles.textPrimary]}>
          Contact Number
        </Text>
        <Text style={[s`text-lg p-2 `, styles.textPrimary]}>Added on</Text>
        <Text style={[s`text-lg p-2 `, styles.textPrimary]}>
          Last Purchase Item
        </Text>
        <Text style={[s`text-lg p-2 `, styles.textPrimary]}>Action</Text>
      </View>
      {data.map((customer, i) => {
          if(i%2 == 0){
            return (
              <View style={[s`bg-white flex flex-row justify-between p-2 m-1 rounded-lg`]} key={i}>
            <Text
              style={[
                s`text-lg p-2  w-fit h-fit text-center text-black`,
               ,
              ]}>
              {customer.id}
            </Text>
            <Text style={[s`text-lg p-2 text-black`, ]}>
              {customer.name}
            </Text>
            <Text style={[s`text-lg p-2 text-black`, ]}>Email</Text>
            <Text style={[s`text-lg p-2 text-black`, ]}>
              {customer.phone}
            </Text>
            <Text style={[s`text-lg p-2 text-black`, ]}>Added on</Text>
            <Text style={[s`text-lg p-2 text-black`, ]}>
              Last Purchase Item
            </Text>
            <Text style={[s`text-lg p-2 text-black`, ]}>
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={18}
                color="#000"
              />
            </Text>
          </View>
            )
          }
        else{
          return (
            <View style={[s`bg-gray-200 flex flex-row justify-between p-2 m-1 rounded-lg`]} key={i}>
            <Text
              style={[
                s`text-lg p-2  w-fit h-fit text-center text-black`,
              ]}>
              {customer.id}
            </Text>
            <Text style={[s`text-lg p-2 text-black`, ]}>
              {customer.name}
            </Text>
            <Text style={[s`text-lg p-2 text-black`, ]}>Email</Text>
            <Text style={[s`text-lg p-2 text-black`, ]}>
              {customer.phone}
            </Text>
            <Text style={[s`text-lg p-2 text-black`, ]}>Added on</Text>
            <Text style={[s`text-lg p-2 text-black`, ]}>
              Last Purchase Item
            </Text>
            <Text style={[s`text-lg p-2 text-black`, ]}>
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={18}
                color="#000"
              />
            </Text>
          </View>
          )
        }
        
      })}
    </ScrollView>
  );
};

export default Customers;
