import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
    <View style={[s`flex justify-between`]}>
      <View
        style={[
          s`bg-blue-400 flex justify-between flex-row px-3 items-center`,
          styles.header,
        ]}>
        <View style={[s`bg-green-300 flex justify-center items-start`]}>
          <View style={[s`flex flex-row items-center`]}>
            <Text style={[s`text-xl mx-2 my-1 font-bold`, styles.textBlack]}>
              Customers
            </Text>
            <Text
              style={[
                s`text-sm p-1 text-center rounded`,
                styles.textPrimary,
                styles.bgTertiary,
              ]}>
              {' '}
              {'2'} New Customers
            </Text>
          </View>
          <Text style={[s`text-sm mx-2`, styles.textGrey]}>
            see all customers here
          </Text>
        </View>
        <View style={[s`flex flex-row`]}>
          <View style={[s`w-30 `, styles.bgSecondary]}>
          <TextInput
        style={[s`border mb-2 p-2 `]}
        placeholder="Search for customers..."
        placeholderTextColor="black"

        value={searchQuery}
        onChangeText={handleSearchQueryChange}
      />
          </View>
          <Pressable style={[s`text-lg flex flex-row p-2 items-center rounded`,  styles.bgPrimary]}>
            <AntDesign
              name="plus"
              size={18}
              color="#F5F5F5"
            />
            <Text style={[s`text-lg mx-2`,styles.textWhite]}>New Customer</Text>
          </Pressable>
        </View>
      </View>
      <View style={[s`bg-white`, styles.table]}>
        <View style={[s`bg-gray-200 flex flex-row justify-between p-1 m-1 `]}>
          <Text
            style={[
              s`text-lg p-1 w-fit h-fit text-center `,
              styles.textPrimary,
            ]}>
            ID
          </Text>
          <Text style={[s`text-lg p-1  `, styles.textPrimary]}>
            Customer Name
          </Text>
          <Text style={[s`text-lg p-1  `, styles.textPrimary]}>Email</Text>
          <Text style={[s`text-lg p-1  `, styles.textPrimary]}>
            Contact Number
          </Text>
          <Text style={[s`text-lg p-1  `, styles.textPrimary]}>Added on</Text>
          <Text style={[s`text-lg p-1  `, styles.textPrimary]}>
            Last Purchase Item
          </Text>
          <Text style={[s`text-lg p-1  `, styles.textPrimary]}>Action</Text>
        </View>
        {data.map((customer, i) => {
          if (i % 2 == 0) {
            return (
              <View
                style={[
                  s`bg-red-300 flex flex-row justify-between  px-1 rounded-lg`,
                ]}
                key={i}>
                <Text
                  style={[
                    s`text-lg p-1  w-fit h-fit text-center text-black border m-1`,
                    ,
                  ]}>
                  {customer.id}
                </Text>
                <Text style={[s`text-lg p-1 text-black border m-1`]}>
                  {customer.name}
                </Text>
                <Text style={[s`text-lg p-1 text-black border m-1`]}>
                  Email
                </Text>
                <Text style={[s`text-lg p-1 text-black border m-1`]}>
                  {customer.phone}
                </Text>
                <Text style={[s`text-lg p-1 text-black border m-1`]}>
                  Added on
                </Text>
                <Text style={[s`text-lg p-1 text-black border m-1`]}>
                  Last Purchase Item
                </Text>
                <Pressable style={[s`text-lg p-1 text-black border m-1`]}>
                  <MaterialCommunityIcons
                    name="dots-horizontal"
                    size={18}
                    color="#000"
                  />
                </Pressable>
              </View>
            );
          } else {
            return (
              <View
                style={[
                  s`bg-gray-200 flex flex-row justify-between px-1  rounded-lg`,
                ]}
                key={i}>
                <Text
                  style={[
                    s`text-lg   w-fit h-fit text-center text-black border m-1`,
                  ]}>
                  {customer.id}
                </Text>
                <Text style={[s`text-lg p-1 text-black border m-1`]}>
                  {customer.name}
                </Text>
                <Text style={[s`text-lg p-1 text-black border m-1`]}>
                  Email
                </Text>
                <Text style={[s`text-lg p-1 text-black border m-1`]}>
                  {customer.phone}
                </Text>
                <Text style={[s`text-lg p-1 text-black border m-1`]}>
                  Added on
                </Text>
                <Text style={[s`text-lg p-1 text-black border m-1`]}>
                  Last Purchase Item
                </Text>
                <Pressable style={[s`text-lg p-1 text-black border m-1`]}>
                  <MaterialCommunityIcons
                    name="dots-horizontal"
                    size={18}
                    color="#000"
                  />
                </Pressable>
              </View>
            );
          }
        })}
      </View>
    </View>
  );
};

export default Customers;
