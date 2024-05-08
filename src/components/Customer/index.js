import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalDropdown from 'react-native-modal-dropdown';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
  ScrollView,
  Image
} from 'react-native';
import success from '../../public/success.jpg';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Menu, Modal, MenuItem, Icon as UIcon} from '@ui-kitten/components';
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from '@react-navigation/native';
import deleteImg from '../../public/delete.jpg'
import {useDispatch, useSelector} from 'react-redux';
import {s} from 'react-native-wind';
import styles from './styles';
import {deleteCustomer} from '../../redux/slice/customerSlice';
const Customers = () => {
  const data = useSelector(state => state.CustomerSlice.customers);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const [ShowAlert, setShowAlert] = React.useState(false);

  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
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
        (customer.id &&
          customer.id.toLowerCase().includes(query.toLowerCase())) ||
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
    setSelectedCustomer(customer);
    setShowModal(!showModal);
    // if (navigation.getState().routes[0].name == 'Settings') {
    //   console.log('customer details', customer);
    // } else if (
    //   navigation.getState().routes[0].name == 'HomePage' &&
    //   navigation.getState().routes[1].name == 'Adduser'
    // ) {
    //   console.log('added a new user ', customer);
    // } else if (
    //   navigation.getState().routes[0].name == 'Settings' &&
    //   navigation.getState().routes[2].name == 'Adduser'
    // ) {
    //   console.log('added a new user from settings ', customer);
    // } else if (
    //   navigation.getState().routes[0].name == 'OrdersPage' &&
    //   navigation.getState().routes[1].name == 'Order'
    // ) {
    //   console.log('updating order status');
    //   navigation.navigate('Share', {order: order});
    //   // navigation.navigate('Share',orderId)
    // } else {
    //   console.log('goint to cash to create product', {
    //     total: total,
    //     user: customer,
    //     items: items,
    //   });
    //   navigation.navigate('Cash', {
    //     total: total,
    //     user: customer,
    //     items: items,
    //   });
    // }
  };

  useEffect(() => {
    setFilteredCustomers(filterCustomers(data, searchQuery));
    // fetchCustomers()
  }, [data, searchQuery]);

  const handleActionSelect = (action, customer) => {
    setShowModal(false); // Close the options modal
    if (action === 'Order History') {
      //  Order History action
      console.log('navigating to View order history for customer:', customer);
      navigation.navigate('CustomerInfo',{customer:customer})
    } else if (action === 'Edit') {
      console.log('navigating to Edit customer:', customer);
      navigation.navigate('Adduser', {customer: customer});
    } else if (action === 'Delete') {
      setShowAlert(true)
      console.log('Deleting  customer:', customer);
      // delete api of customer
      dispatch(deleteCustomer(customer));
    }
  };

  return (
    <View style={[s`flex w-full relative`, styles.bgWhite]}>
      <View
        style={[
          s` flex justify-between flex-row px-3 items-center mt-1 min-h-20  z-10 `,
          styles.header,
        ]}>
        <View style={[s` flex justify-center items-start`]}>
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
        <View
          style={[
            s`flex flex-row items-center  justify-between h-fit`,
            styles.headerRight,
          ]}>
          <TextInput
            style={[s`border  rounded p-2 self-center `, styles.searchBar]}
            placeholder="Search for customers..."
            placeholderTextColor="#9F9F9E"
            value={searchQuery}
            onChangeText={handleSearchQueryChange}
          />

          <Pressable
            style={[
              s`text-lg flex flex-row p-2 items-center rounded`,
              styles.bgPrimary,
            ]}
            onPress={navigateToAddUser}>
            <AntDesign name="plus" size={18} color="#F5F5F5" />
            <Text style={[s`text-lg mx-2`, styles.textWhite]}>
              New Customer
            </Text>
          </Pressable>
        </View>
      </View>
      <ScrollView style={[s`bg-white  m-1 mt-20 p-1`, styles.table]}>
        <Modal
          visible={ShowAlert}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => setVisible(false)}
          style={[
            s`absolute rounded-2xl flex justify-between p-3`,
            styles.modal,
            styles.bgPureWhite,
          ]}>
          <View style={[s` m-3 flex items-center p-2`]}>
            <Image source={deleteImg} style={[s`w-14 h-12 rounded-2xl`]} />
            <Text style={[s`font-semibold text-lg m-2`, styles.textSecondary]}>
              Delete!
            </Text>
            <Text style={[s`m-2`, styles.textBlack]}>
              Do you want to delete the Customer 
            </Text>
          </View>

          <View
            style={[s`flex flex-row items-center justify-between w-fit p-2`]}>
            <Pressable
              onPress={() => {
                // navigation.goBack();
                // setVisible(false);
                setShowAlert(false)
              }}
              style={[
                s`w-32 rounded flex justify-center items-center mx-2 mb-0 p-2 `,
                styles.borderButton,
              ]}>
              <Text style={[styles.textPrimary]}>Go Back</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setVisible(true)
                // navigation.navigate('Customer');
                setShowAlert(false);
              }}
              style={[
                s`w-32 rounded flex justify-center items-center mb-0 p-2 `,
                styles.bgPrimary,
                styles.textWhite,
              ]}>
              <Text style={[styles.textWhite]}>Sure</Text>
            </Pressable>
          </View>
        </Modal>
        <Modal
          visible={visible}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => setVisible(false)}
          style={[
            s`absolute rounded-2xl flex justify-between items-center p-3`,
            styles.modal,
            styles.bgPureWhite,
          ]}>
          <View style={[s` m-3 flex items-center p-2`]}>
            <Image source={success} style={[s`w-14 h-12 rounded-2xl`]} />
            <Text style={[s`font-semibold text-lg m-2`, styles.textPrimary]}>
              Success!
            </Text>
            <Text style={[s`m-2`, styles.textBlack]}>
             Customer Data Deleted Sucessfully
            </Text>
          </View>

          
            <Pressable
              onPress={() => {
                // navigation.goBack();
                setVisible(false);
              }}
              style={[
                s` rounded flex justify-center items-center mx-2 mb-0 p-2 `,
                styles.borderButton,
              ]}>
              <Text style={[styles.textPrimary]}>Go To Customer Page</Text>
            </Pressable>
             
          
        </Modal>
        <View
          style={[s`flex flex-row justify-between p-1 m-1 `, styles.bgWhite]}>
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
        {filteredCustomers &&
          filteredCustomers.map((customer, i) => {
            return (
              <View
                style={[
                  s` flex flex-row justify-between px-1 rounded-lg py-1 relative z-10`,
                  i % 2 == 0 ? styles.bgPureWhite : styles.bgWhite,
                ]}
                key={i}>
                <Text
                  style={[
                    s`text-lg p-1  w-fit h-fit text-center text-black  m-1`,
                    ,
                  ]}>
                  {customer.id}
                </Text>
                <Text style={[s`text-lg p-1 text-black  m-1`]}>
                  {customer.name}
                </Text>
                <Text style={[s`text-lg p-1 text-black  m-1`]}>Email</Text>
                <Text style={[s`text-lg p-1 text-black  m-1`]}>
                  {customer.phone}
                </Text>
                <Text style={[s`text-lg p-1 text-black  m-1`]}>Added on</Text>
                <Text style={[s`text-lg p-1 text-black  m-1`]}>
                  Last Purchase Item
                </Text>
                <Pressable
                  style={[s`text-lg p-1 text-black  m-1`]}
                  onPress={() => handleItemPress(customer)}>
                  {
                    <MaterialCommunityIcons
                      name="dots-horizontal"
                      size={18}
                      color="#000"
                    />
                  }
                </Pressable>
                {selectedCustomer && selectedCustomer.id === customer.id && (
                  <View
                    style={[
                      s` flex items-center w-24 h-20  z-30 right-0 absolute `,
                      styles.menu,
                      styles.bgPureWhite,
                    ]}>
                    <Pressable
                      style={[s`  z-20`, styles.menuItem, styles.textBlack]}
                      onPress={() =>
                        handleActionSelect('Order History', customer)
                      }>
                      <Text>Order History</Text>
                    </Pressable>
                    <Pressable
                      style={[s` z-20`, styles.menuItem, styles.textBlack]}
                      onPress={() => handleActionSelect('Edit', customer)}>
                      <Text>Edit</Text>
                    </Pressable>
                    <Pressable
                      style={[s`  z-20`, styles.menuItem, styles.textBlack]}
                      onPress={() => handleActionSelect('Delete', customer)}>
                      <Text>Delete</Text>
                    </Pressable>
                  </View>
                )}
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Customers;
