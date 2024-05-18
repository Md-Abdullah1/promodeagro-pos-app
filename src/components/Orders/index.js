import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {s} from 'react-native-wind';
const Orders = () => {
  const navigation = useNavigation();
  const fetchedOrders = useSelector(state => state.CustomerSlice.orders);

  console.log('fetched orders', fetchedOrders);
  const handleOrder = order => {
    console.log('navigating to order');
    console.log('order value ', order);
    navigation.navigate('Order', {value: order});
    console.log('after order value ', order);
  };
  const [ordersType, setOrdersType] = useState('Order History');
  console.log(`orders type: ${ordersType}`);
  return (
    <View style={[s`w-full h-full bg-blue-400 p-0 m-0  `]}>
      <View
        style={[
          s` flex  flex-row px-6 p-1 items-center  mb-1   z-10 rounded-lg `,
          styles.header,
          styles.bgPureWhite,
          styles.shadow,
        ]}>
        <Pressable
          style={[
            s`text-lg flex flex-row p-2 px-3 mr-12 items-center rounded`,
            ordersType === 'Order History' && styles.borderButton,
          ]}
          onPress={() => setOrdersType('Order History')}>
          {/* <AntDesign name="plus" size={18} color="#F5F5F5" /> */}
          <Text style={[s`text-lg mx-2`, styles.textBlack]}>Order History</Text>
        </Pressable>
        <Pressable
          style={[
            s`text-lg flex flex-row p-2 px-3 mr-12 items-center rounded`,
            ordersType === 'Order on Hold' && styles.borderButton,
          ]}
          onPress={() => setOrdersType('Order on Hold')}>
          {/* <AntDesign name="plus" size={18} color="#F5F5F5" /> */}
          <Text style={[s`text-lg mx-2`, styles.textBlack]}>Order on Hold</Text>
        </Pressable>
        <Pressable
          style={[
            s`text-lg flex flex-row p-2 px-3 mr-12 items-center rounded`,
            ordersType === 'Offline Orders' && styles.borderButton,
          ]}
          onPress={() => setOrdersType('Offline Orders')}>
          {/* <AntDesign name="plus" size={18} color="#F5F5F5" /> */}
          <Text style={[s`text-lg mx-2`, styles.textBlack]}>
            Offline Orders
          </Text>
        </Pressable>
      </View>
      <View style={[s`my-1 py-1 bg-blue-100`]}>
        <Text style={[s`text-xl  font-medium`, styles.textBlack]}>
          {ordersType}
        </Text>
      </View>
      <View>
        <View style={[s`bg-white  m-1  p-1`, styles.table]}>
          <View
            style={[s`flex flex-row justify-between px-3 p-1 m-1 `, styles.bgWhite]}>
            <Text
              style={[
                s`text-lg p-1 w-fit h-fit text-center `,
                styles.textPrimary,
              ]}>
              S.No
            </Text>
            <Text style={[s`text-lg p-1  `, styles.textPrimary]}>Name</Text>
            <Text style={[s`text-lg p-1  `, styles.textPrimary]}>Order ID</Text>

            <Text style={[s`text-lg p-1  `, styles.textPrimary]}>
              Date & Time
            </Text>
            <Text style={[s`text-lg p-1  `, styles.textPrimary]}>
              Total Amount
            </Text>
            <Text style={[s`text-lg p-1  `, styles.textPrimary]}>Status</Text>
          </View>
          {fetchedOrders &&
            fetchedOrders.map((order, i) => {
              return (
                <ScrollView
                  style={[
                    s` flex flex-row justify-between px-3 rounded-lg py-1 relative z-10`,
                    i % 2 == 0 ? styles.bgPureWhite : styles.bgWhite,
                  ]}
                  key={i}>
                  <Text
                    style={[
                      s`text-lg p-1  text-black bg-black  m-1`,
                      ,
                    ]}>
                    {i+1}
                  </Text>
                  <Text style={[s`text-lg p-1 text-black  m-1`]}>
                    {order?.name}
                  </Text>
                  <Text style={[s`text-lg p-1 text-black  m-1`]}>Email</Text>
                  <Text style={[s`text-lg p-1 text-black  m-1`]}>
                    {order?.id}
                  </Text>
                  <Text style={[s`text-lg p-1 text-black  m-1`]}>{order.createdAt ? order.createdAt.slice(0, 10) : ''}</Text>
                  <Text style={[s`text-lg p-1 text-black  m-1`]}>
                   {order?.totalPrice}
                  </Text>
                  <Pressable
                    style={[s`text-lg p-1 text-black  m-1`]}
                    // onPress={() => handleItemPress(customer)}
                    >
                  <Text style={[s`text-lg p-1 text-black  m-1`]}>
                   View Details
                  </Text>
                    
                  </Pressable>
                </ScrollView>
              );
            })}
        </View>
      </View>
    </View>
  );
};

export default Orders;
