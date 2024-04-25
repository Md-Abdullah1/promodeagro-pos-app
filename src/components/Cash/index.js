import {View, Text, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addOrders} from '../../redux/slice/customerSlice';
import {creatingOrder} from '../../api/createOrder';
import { updatingOrder } from '../../api/updateOrder';
import axios from "../../api/axios"
// const valuePass=()=>{

// }

const Cash = () => {
  const routdata = useRoute();
  const navigation = useNavigation();

  const handleGoToCash = () => {
    navigation.goBack();
  };
  const dispatch = useDispatch();


  // daTA of update order {totalPrice:order.totalPrice,orderId:order.id,customerId:order.customerOrdersId}
  const createTotal = routdata.params?.total;
  const updateTotal = routdata.params?.totalPrice;
  const total = createTotal ? createTotal : updateTotal;
  const user = routdata.params?.user;
  const items = routdata.params?.items;
  const orderId = routdata.params?.orderId;
  const customerId = routdata.params?.customerId;
  // console.log("route value",total);
  console.log('route data', total,user,items);
  console.log('route data to update', customerId,orderId);
  // console.log('order id from order', orderId);
  // total: total,
  // user: customer,
  // items: items,
  const handleOrder = async payment => {
    if (orderId  && customerId ) {
      const updateOrderData = {
        paymentMethod: payment,
        id: orderId,
        status: 'FULFILLED',
        totolPrice: updateTotal,
        customerId: customerId,
      };
      console.log('sending data of order to update', updateOrderData);
      const OrderUpdated = await updateOrder(updateOrderData);
      console.log('dispatching created order', OrderUpdated);
      // dispatch(addOrders(OrderUpdated))
      // dispatch(emptyCart())
      console.log('going to share with updateorder',{data: OrderUpdated})
      navigation.navigate('Share', {data: OrderUpdated});
    } else {
      console.log('in else block to create order');
      const orderData = {
        paymentMethod: payment,
        totolPrice: createTotal,
        user: user,
        items: items,
      };
      console.log('sending data of order to create', orderData);
      const OrderCreated = await createOrder(orderData);
      console.log('dispatching created order', OrderCreated);
      dispatch(addOrders(OrderCreated));
      // dispatch(emptyCart())
      console.log('going to share with created order',{data: orderData})
      navigation.navigate('Share', {data: orderData});
    }
  };
  const createOrder = async order => {
    console.log('This is items ', order);
    // try {
    //   console.log('creating order async', order);

    //   const response = await creatingOrder(order);
    //   console.log('created order response ', response);

    //   return response;
    // }
  //  format {
  //     "items": [
  //         {
  //             "productId": "102487562907",
  //             "quantity": 2
             
  //         },
  //         {
  //             "productId": "102487562907",
  //             "quantity": 1
             
  //         }
  //     ],
  //     "customerId": "5cbec4fe-60a2-464c-a9c2-bc900aab2098",
  //     "totalPrice": 1002,
  //     "paymentMethod": "CASH",
  //     "status": "Pending"
  // }
    const data = {
    items: order.items,
    customerId: order.user.id,
    totalPrice: order.totolPrice,
    paymentMethod: order.paymentMethod,
    status: "Pending"
}
    try {
      console.log('creating order async', order);
      console.log('creating order with data', data);

   const response = await axios.post('/createOrder',data)  
   console.log('created order response ', response.data);

      return response.data;
    }
     catch (error) {
      console.log('error creating order', error);
    }
  };
  const updateOrder = async order => {
    console.log('This is items ', order);
    try {
      console.log('updating order async', order);

      const response = await updatingOrder(order);
      console.log('updated order response ', response);

      return response;
    } catch (error) {
      console.log('error updating order', error);
    }
  };

  const getCustomer = async customerId => {
    console.log('This is items ', customerId);
    try {
      console.log('getting user async', customerId);

      const response = await gettingCustomer(customerId);
      console.log('getting user response ', response);

      return response;
    } catch (error) {
      console.log('error geting user', error);
    }
  };
  const [Isloading, setIsloadig] = useState(true);
  useEffect(() => {
    getCustomer(customerId);
    const timer = setTimeout(() => {
      setIsloadig(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
          marginTop: 40,
        }}>
        <Text>
          {' '}
          <AntDesign
            name="close"
            size={30}
            color="blue"
            onPress={handleGoToCash}
          />
        </Text>
        <Text style={{fontSize: 16, fontWeight: 600, color: 'black'}}>
          Mark unpaid
        </Text>
      </View>
      <View
        style={{
          borderBottomColor: 'lightgray',
          borderBottomWidth: 1,
          marginVertical: 8,
          color: 'white',
        }}
      />
      {Isloading ? (
        <Text
          style={{
            paddingHorizontal: 20,
            fontSize: 16,
            color: 'black',
          }}>
          Loading ........
        </Text>
      ) : (
        <View
          style={{
            paddingHorizontal: 20,
          }}>
          <Text style={{fontWeight: 600, fontSize: 17, color: 'black'}}>
            {' '}
            ₹ {total}.00
          </Text>
          <Text style={{fontSize: 14, fontWeight: 500, color: 'black'}}>
            Select Payment Option
          </Text>
        </View>
      )}
      <View
        style={{
          border: '.5px solid gray',
          margin: 15,
          flexDirection: 'column',
          gap: 20,
          padding: 15,
        }}>
        <Pressable
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          onPress={() => handleOrder('CASH')}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons name="cash" size={24} color="black" />

            <Text
              style={{
                padding: 8,
                fontSize: 14,
                fontWeight: 500,
                color: 'black',
              }}>
              Cash
            </Text>
          </View>
          <AntDesign name="right" size={20} color="black" />
        </Pressable>
        <View
          style={{
            borderBottomColor: 'lightgray',
            borderBottomWidth: 1,
            marginVertical: 8,
            color: 'white',
          }}
        />
        <Pressable
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          onPress={() => handleOrder('UPI')}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons name="cash" size={24} color="black" />
            <Text
              style={{
                padding: 8,
                fontSize: 14,
                fontWeight: 500,
                color: 'black',
              }}>
              Upi
            </Text>
          </View>
          <AntDesign name="right" size={20} color="black" />
        </Pressable>
        <View
          style={{
            borderBottomColor: 'lightgray',
            borderBottomWidth: 1,
            marginVertical: 8,
            color: 'white',
          }}
        />
        <Pressable
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'gray',
          }}
          // onPress={handleOrder}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons name="cash" size={24} color="black" />
            <Text
              style={{
                padding: 8,
                fontSize: 14,
                fontWeight: 500,
                color: 'black',
              }}>
              Split Payment
            </Text>
          </View>
          <AntDesign name="right" size={20} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default Cash;
