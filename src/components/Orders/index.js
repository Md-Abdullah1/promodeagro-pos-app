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

  return (
    <View>
      <View
        style={[
          s` flex  flex-row px-6 p-1 items-center  mt-1   z-10 rounded-lg `,
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
      {/* <View>
        <Text style={[s``, styles.textBlack]}>hi{ordersType}</Text>
      </View> */}
      <ScrollView style={[styles.scrollbar]}>
        {console.log('in scrool')}

        {fetchedOrders.length > 0 ? (
          fetchedOrders.map((order, index) => {
            return (
              <Pressable
                style={[styles.box, styles.shadow]}
                key={index}
                onPress={() => handleOrder(order)}>
                <View style={[{flex: 1}, styles.gap]}>
                  <Text style={{fontWeight: 500, fontSize: 16, color: 'gray'}}>
                    {order.createdAt ? order.createdAt.slice(0, 10) : ''}
                  </Text>
                  <View style={[styles.border]}></View>
                  <View style={[styles.gap]}>
                    <Text style={{fontSize: 16, color: 'black'}}>
                      #{order.id}{' '}
                    </Text>
                    <Text
                      style={{
                        fontSize: 18,
                        color: '#31572c',
                        flex: 1,
                        fontWeight: '700',
                      }}>
                      <FontAwesome
                        name="rupee"
                        size={18}
                        color="#31572c"
                        style={{marginRight: 5, marginLeft: 5}}
                      />
                      {order.totalPrice}
                      {'   '}
                      orderd price
                    </Text>
                  </View>
                  <View style={[styles.arrowbox, {margin: 5}]}>
                    {/* <Text>No Customer </Text> */}
                    <Text></Text>
                    <FontAwesome5 name="angle-right" size={26} color="black" />
                  </View>
                </View>
                <View style={[styles.status]}>
                  <View style={[styles.statusbar]}>
                    <FontAwesome name="circle" size={18} color="#31572c" />
                    <Text style={{marginLeft: 5, color: 'black'}}>
                      {order.status}
                    </Text>
                  </View>

                  {/* <View style={[styles.statusbar]}>
                    <FontAwesome name="circle" size={18} color="#31572c" />
                    <Text style={{marginLeft: 5}}>Fulfilled</Text>
                  </View> */}
                </View>
              </Pressable>
            );
          })
        ) : (
          <ActivityIndicator size="large" color="#31572c" />
        )}
        {console.log('scrool ended')}
      </ScrollView>
    </View>
  );
};

export default Orders;
