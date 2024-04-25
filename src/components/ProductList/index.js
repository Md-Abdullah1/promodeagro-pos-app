// import React from 'react';

// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   Button,
// } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';
// // import { fetchProducts } from "../fetchProducts";

// import { useState, useEffect } from 'react';
// // import { generateClient } from 'aws-amplify/api';
// import { generateClient } from 'aws-amplify/api';

// import { Amplify } from 'aws-amplify';

// import { useSelector, useDispatch } from 'react-redux';
// // import {AddProduct, removeItem} from '../redux/slice/Product';
// // import {addToCart, removeFromCart} from '../redux/slice/customerSlice';
// import { addToCart, removeFromCart } from '../../redux/slice/customerSlice';

// const GetAllProducts = () => {
//   const dispatch = useDispatch();

//   const client = generateClient();
//   const route = useRoute();
//   console.log(route.params.category);
//   console.log(route.params.catProducts);
//   const Pdata = route.params.catProducts;

//   console.log(Pdata);

//   //   const [cartItems, setCartItems] = useState([]);

//   const navigation = useNavigation();

//   const reduxData = useSelector(state => state.CustomerSlice);
//   // console.log(reduxData)
//   console.log('Redux data', reduxData);

//   // let mappredux = reduxData.cart.map(e => e.id);

//   // console.log({...mappredux});

//   const HandleIncrement = veg => {
//     const data = dispatch(addToCart(veg));
//     console.log(data.payload);

//     console.log(reduxData);
//   };

//   const handleDecrement = veg => {
//     dispatch(removeFromCart(veg.id));
//     console.log(veg.id);
//   };

//   const handleProduct = prod => {
//     console.log('navigate to product');
//     navigation.navigate('ProductPage', { value: prod });
//     console.log('navigate to product 2');
//   };

//   const handleCart = () => {
//     console.log('navigate to cart');
//     navigation.navigate('Checkout');
//     console.log('navigate to Checkout ');
//   };
//   /////   for calculating price /////
//   const calculateTotalPrice = reduxData => {
//     return reduxData.reduce((totalPrice, orderItem) => {
//       console.log('This is total price : ' + totalPrice);
//       const itemTotalPrice = orderItem.price * orderItem.quantity; // Calculate total per item
//       return totalPrice + itemTotalPrice; // Accumulate total price
//     }, 0); // Initial value for accumulator (0)
//   };

//   const [totalPrice, setTotalPrice] = useState(null);
//   useEffect(() => {
//     if (reduxData.cart) {
//       // Check if reduxData exists before calculating
//       const newTotalPrice = calculateTotalPrice(reduxData.cart);
//       setTotalPrice(newTotalPrice);
//       console.log(newTotalPrice);
//     }
//   }, [reduxData.cart]);

//   return (
//     <ScrollView>
//       <TouchableOpacity
//         onPress={handleCart}
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignContent: 'center',
//           justifyContent: 'center',
//         }}>
//         <View
//           style={{
//             display: 'flex',
//             flexDirection: 'row',
//             justifyContent: 'space-between',

//             paddingHorizontal: 20,
//             paddingTop: 20,
//             paddingBottom: 20,
//           }}>
//           <View
//             style={{
//               fontWeight: '700',
//               display: 'flex',
//               flexDirection: 'column',
//               width: '50%',
//             }}>
//             <Text
//               style={{
//                 display: 'flex',
//                 flexDirection: 'row',
//                 height: 30,
//                 fontWeight: 700,
//                 alignSelf: 'flex-start',
//                 justifyContent: 'flex-start',
//                 alignItems: 'flex-start',

//                 width: '100%',
//               }}>
//               {
//                 totalPrice === null // Check for null to handle empty initial state
//                   ? 'Calculating total price...' // Display loading message or placeholder
//                   : `Total Price: ${totalPrice.toFixed(2)}

//                   `
//                 // Display calculated total price
//               }
//             </Text>

//             <Text style={{ width: '100%', fontWeight: 700 }}>
//               orders: {reduxData.cart?.length}
//             </Text>
//           </View>
//           <View>
//             <Text
//               style={{
//                 display: 'flex',
//                 // flexDirection: "row",
//                 // justifyContent: "center",
//                 // alignItems: "center",
//                 width: 100,
//                 height: 50,
//                 backgroundColor: 'lightgray',
//                 fontWeight: 700,
//                 paddingTop: 15,

//                 paddingLeft: 15,
//               }}>
//               Checkout
//             </Text>
//           </View>
//         </View>
//       </TouchableOpacity>

//       {Pdata.map(veg => {
//         return (
//           <TouchableOpacity
//             onPress={() => {
//               handleProduct(veg);
//             }}
//             key={veg.id}>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 padding: 10,
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 borderWidth: 1,
//                 borderColor: 'lightgray',
//                 margin: 2,
//               }}>
//               <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                 <Image
//                   source={{
//                     uri: `${veg.image}`,
//                   }}
//                   style={{ width: 70, height: 70, borderRadius: 10 }}
//                 />
//                 <View style={{ marginLeft: 20 }}>
//                   <Text
//                     numberOfLines={2}
//                     ellipsizeMode="tail"
//                     style={{ fontSize: 16, fontWeight: 'bold', width: 120 }}>
//                     {veg.name}!
//                   </Text>
//                   <Text>
//                     {/* Quantity: {veg.quantity || 1}, Total: $ */}
//                     {/* {calculateItemPrice(veg) } */}
//                   </Text>
//                   <Text style={{ fontSize: 12 }}>Price: ${veg.price}</Text>
//                 </View>
//               </View>
//               <View style={{ alignItems: 'center', gap: 10 }}>
//                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                   <View>
//                     <Text>Qty: {veg.unit}</Text>

//                     <Text>
//                       Qty: {reduxData.cart[0] && reduxData.cart[0].quantity}
//                       {reduxData.cart[
//                         reduxData.cart.findIndex(item => item.id == veg.id)
//                       ] &&
//                         reduxData.cart[
//                           reduxData.cart.findIndex(item => item.id == veg.id)
//                         ].quantity}
//                     </Text>
//                     <Text>
//                       Price:
//                       {reduxData.cart[
//                         reduxData.cart.findIndex(item => item.id == veg.id)
//                       ] &&
//                         reduxData.cart[
//                           reduxData.cart.findIndex(item => item.id == veg.id)
//                         ].totalPrice}
//                     </Text>
//                   </View>
//                   <View style={{ flexDirection: 'row', marginLeft: 10 }}>
//                     <TouchableOpacity
//                       style={{
//                         padding: 10,
//                         backgroundColor: 'lightgray',
//                         borderRadius: 5,
//                       }}
//                       onPress={() => {
//                         HandleIncrement(veg);
//                       }}>
//                       <Text
//                       // style={{
//                       //   textAlign: "center",
//                       //   fontSize: "16px",
//                       //   fontWeight: "700",
//                       // }}
//                       >
//                         +
//                       </Text>
//                     </TouchableOpacity>

//                     <TouchableOpacity
//                       style={{
//                         padding: 10,
//                         backgroundColor: 'lightgray',
//                         borderRadius: 5,
//                         marginLeft: 5,
//                       }}
//                       onPress={() => {
//                         handleDecrement(veg);
//                       }}>
//                       <Text
//                       // style={{
//                       //   textAlign: "center",
//                       //   fontSize: "16px",
//                       //   fontWeight: "700",
//                       // }}
//                       >
//                         -
//                       </Text>
//                     </TouchableOpacity>
//                   </View>
//                 </View>

//                 <Text style={{ fontWeight: '700' }}>
//                   {/* Total: ${calculateItemPrice(veg)} */}
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//         );
//       })}
//     </ScrollView>
//   );
// };

// export default GetAllProducts;

// import React from "react";

// import { View, Text, Image, TouchableOpacity, ScrollView, Button } from "react-native";
// import { useNavigation, useRoute } from "@react-navigation/native";
// // import { fetchProducts } from "../fetchProducts";

// import { useState, useEffect } from "react";
// // import { generateClient } from 'aws-amplify/api';
// import { generateClient } from "aws-amplify/api";

// import { Amplify } from "aws-amplify";

// import { useSelector, useDispatch } from "react-redux";
// import { AddProduct, removeItem } from "../redux/slice/Product";
// import { addToCart,removeFromCart } from "../redux/slice/customerSlice";

// const GetAllProducts = () => {
//   const dispatch = useDispatch();

//   const client = generateClient();
//   const route = useRoute();
//   console.log(route.params.category);
//   console.log(route.params.catProducts);
//   const Pdata = route.params.catProducts;

//   console.log(Pdata);

//   const [cartItems, setCartItems] = useState([]);

//   const navigation = useNavigation();

//   const reduxData = useSelector((state) => state.CustomerSlice);
//   // console.log(reduxData)
//   console.log(reduxData.cart);

//   let mappredux = reduxData.cart.map((e)=>e.id)
//   console.log({...mappredux})

//   const HandleIncrement = (veg)=>{
//     // const items = [];
//     // items.push(veg);
//     const data =  dispatch(addToCart(veg));
//     console.log(data.payload)

// // const reduxdata = useSelector((state)=>state.Product.Data)

// console.log(reduxData)
//     // const updatedReduxData = useSelector((state) => state.Product);
//     // console.log("Updated Redux Data:", updatedReduxData.Data);

//     // const MyreduxData = useSelector((state)=>state.Product.Data)
//     // if(reduxData){
//     // const mapProducts = reduxData.Data.map((e)=>e.quantity)
//     // console.log('got the data',reduxData.Data)
//     // console.log(mapProducts)
//     // }
//     // console.log(data);
//     // console.log(items);

//   //   useEffect(() => {
//   //   // Log the quantity for the specific product
//   //   const productQuantity = reduxData.Data.find((item) => item.id === veg.id)?.quantity;
//   //   console.log(Quantity for ${veg.name}:, productQuantity);

//   //   // You can perform other actions here based on the updated state
//   // }, [reduxData]);

//     const updatedCartItems = [...cartItems];
//     const existingItemIndex = updatedCartItems.findIndex(
//       (item) => item.id === veg.id
//     );

//     if (existingItemIndex !== -1) {
//       // Item already exists in the cart, update quantity
//       updatedCartItems[existingItemIndex].quantity += 1;
//     } else {
//       // Item doesn't exist in the cart, add it with quantity 1
//       const newItem = { ...veg, quantity: 1 };
//       updatedCartItems.push(newItem);
//     }

//     setCartItems(updatedCartItems);
//   };

//   const handleDecrement = (veg) => {
//     dispatch(removeFromCart(veg.id));
//     console.log(veg.id);

//     const updatedCartItems = [...cartItems];
//     const existingItemIndex = updatedCartItems.findIndex(
//       (item) => item.id === veg.id
//     );

//     if (existingItemIndex !== -1) {
//       // Item exists in the cart, update quantity
//       if (updatedCartItems[existingItemIndex].quantity > 1) {
//         updatedCartItems[existingItemIndex].quantity -= 1;
//       } else {
//         // Remove item from the cart if quantity is 1
//         updatedCartItems.splice(existingItemIndex, 1);
//       }

//       setCartItems(updatedCartItems);
//     }
//   };

//   const calculateItemPrice = (item) => {
//     return item.price && item.quantity ? item.price * item.quantity : 0;
//   };

//   const calculateTotalPrice = () => {
//     return cartItems.reduce(
//       (total, item) => total + calculateItemPrice(item),
//       0
//     );
//   };

//   // const getTotalPrice = (productId) => {
//   //   console.log(productId);
//   //   // return (quantity * PriceperItem).toFixed(2);
//   // };

//   const handleProduct = (prod) => {
//     console.log("navigate to product");
//     navigation.navigate("ProductPage", { value: prod });
//     console.log("navigate to product 2");
//   };

//   const handleCart = () => {
//     console.log("navigate to cart");
//     navigation.navigate("Checkout");
//     console.log("navigate to Checkout ");
//   };

//   return (
//     // <div>
//     // <div className="flex flex-col">

//     <ScrollView>
//       <TouchableOpacity onPress={handleCart} style={{ width:'100%', justifyContent:'space-between',}} >
//         <View style={{ display:'flex', flexDirection:'row', justifyContent:'space-between',alignContent:'center', paddingVertical:10, paddingHorizontal:20}}>

//       <Text style={{ fontWeight: "700" }}>
//         Grand Total: ${calculateTotalPrice()}

//       </Text>
//       <Text style={{backgroundColor:'lightgray ', padding:'20px'}}  >Checkout</Text>
//       </View>

//       {/* <Button style={{backgroundColor:'white', color:'black'}} >Checkout</Button> */}
//       </TouchableOpacity>

//       {Pdata.map((veg) => {
//         return (
//           <TouchableOpacity
//             onPress={() => {
//               handleProduct(veg);
//             }}
//             key={veg.id}
//           >
//             <View
//               style={{
//                 flexDirection: "row",
//                 padding: 10,
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 borderWidth: 1,
//                 borderColor: "black",
//                 margin: 2,
//               }}
//             >
//               <View style={{ flexDirection: "row", alignItems: "center" }}>
//                 <Image
//                   source={{
//                     uri: ${veg.image},
//                   }}
//                   style={{ width: 70, height: 70, borderRadius: 10 }}
//                 />
//                 <View style={{ marginLeft: 20 }}>
//                   <Text
//                     numberOfLines={2}
//                     ellipsizeMode="tail"
//                     style={{ fontSize: 16, fontWeight: "bold", width: 120 }}
//                   >
//                     {veg.name}!
//                   </Text>
//                   <Text>
//                     {/* Quantity: {veg.quantity || 1}, Total: $ */}
//                     {/* {calculateItemPrice(veg) } */}
//                   </Text>
//                   <Text style={{ fontSize: 12 }}>Price: ${veg.price}</Text>
//                 </View>
//               </View>
//               <View style={{ alignItems: "center", gap: 10 }}>
//                 <View style={{ flexDirection: "row", alignItems: "center" }}>

//                    <View>

//                    <Text>Qty: {veg.unit}</Text>

// <Text >
//    Qty: {/* {reduxData.Data[0] && reduxData.Data[0].quantity} */}
//     {reduxData.cart[
//       reduxData.cart.findIndex((item) => item.id == veg.id)
//     ] &&
//       reduxData.cart[
//         reduxData.cart.findIndex((item) => item.id == veg.id)
//       ].quantity}
// </Text>
// <Text>
//     Price:
//     {reduxData.cart[
//       reduxData.cart.findIndex((item) => item.id == veg.id)
//     ] &&
//       reduxData.cart[
//         reduxData.cart.findIndex((item) => item.id == veg.id)
//       ].totalPrice}
//   </Text>
//                   </View>
//                   <View style={{ flexDirection: "row", marginLeft: 10 }}>
//                     <TouchableOpacity
//                       style={{
//                         padding: 10,
//                         backgroundColor: "lightgray",
//                         borderRadius: 5,
//                       }}
//                       onPress={() => {
//                         HandleIncrement(veg);
//                       }}
//                     >
//                       <Text
//                         style={{
//                           textAlign: "center",
//                           fontSize: "16px",
//                           fontWeight: "700",
//                         }}
//                       >
//                         +
//                       </Text>
//                     </TouchableOpacity>

//                     <TouchableOpacity
//                       style={{
//                         padding: 10,
//                         backgroundColor: "lightgray",
//                         borderRadius: 5,
//                         marginLeft: 5,
//                       }}
//                       onPress={() => {
//                         handleDecrement(veg);
//                       }}
//                     >
//                       <Text
//                         style={{
//                           textAlign: "center",
//                           fontSize: "16px",
//                           fontWeight: "700",
//                         }}
//                       >
//                         -
//                       </Text>
//                     </TouchableOpacity>

//                     </View>

//                 </View>

//                 <Text style={{ fontWeight: "700" }}>
//                   {/* Total: ${calculateItemPrice(veg)} */}
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//         );
//       })}
//     </ScrollView>
//   );
// };

// export default GetAllProducts;

/////////////////second time

// import React from "react";
// import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addToCart, removeFromCart } from "../redux/slice/customerSlice";

// const GetAllProducts = () => {
//   const dispatch = useDispatch();
//   const route = useRoute();
//   const Pdata = route.params.catProducts;
//   const [cartItems, setCartItems] = useState([]);
//   const navigation = useNavigation();
//   const reduxData = useSelector((state) => state.CustomerSlice);

//   const HandleIncrement = (veg) => {
//     const data = dispatch(addToCart(veg));
// const updatedCartItems = [...cartItems];
//     const existingItemIndex = updatedCartItems.findIndex(
//       (item) => item.id === veg.id
//     );

//     if (existingItemIndex !== -1) {
//       // Item already exists in the cart, update quantity
//       updatedCartItems[existingItemIndex].quantity += 1;
//     } else {
//       // Item doesn't exist in the cart, add it with quantity 1
//       const newItem = { ...veg, quantity: 1 };
//       updatedCartItems.push(newItem);
//     }

//     setCartItems(updatedCartItems);
//   };

//   const handleDecrement = (veg) => {
//     dispatch(removeFromCart(veg.id));

// const updatedCartItems = [...cartItems];
// const existingItemIndex = updatedCartItems.findIndex(
//   (item) => item.id === veg.id
// );

// if (existingItemIndex !== -1) {
//   // Item exists in the cart, update quantity
//   if (updatedCartItems[existingItemIndex].quantity > 1) {
//     updatedCartItems[existingItemIndex].quantity -= 1;
//   } else {
//     // Remove item from the cart if quantity is 1
//     updatedCartItems.splice(existingItemIndex, 1);
//   }

//   setCartItems(updatedCartItems);}
//   };

//   const calculateItemPrice = (item) => {
//     return item.price && item.quantity ? item.price * item.quantity : 0;
//   };

//   const calculateTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + calculateItemPrice(item), 0);
//   };

//   const handleProduct = (prod) => {
//     navigation.navigate("ProductPage", { value: prod });
//   };

//   const handleCart = () => {
//     navigation.navigate("Checkout");
//   };

//   return (
//     <ScrollView>
//       <TouchableOpacity onPress={handleCart} style={{ width: '100%', justifyContent: 'space-between' }}>
//         <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', paddingVertical: 10, paddingHorizontal: 20 }}>
//           <Text style={{ fontWeight: "700" }}>
//             Grand Total: ${calculateTotalPrice()}
//           </Text>
//           <Text style={{ backgroundColor: 'lightgray', padding: 20 }}>Checkout</Text>
//         </View>
//       </TouchableOpacity>

//       {Pdata.map((veg) => {
//         return (
//           <TouchableOpacity onPress={() => handleProduct(veg)} key={veg.id}>
//             <View style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", alignItems: "center", borderWidth: 1, borderColor: "black", margin: 2 }}>
//               <View style={{ flexDirection: "row", alignItems: "center" }}>
//                 <Image source={{ uri: ${veg.image} }} style={{ width: 70, height: 70, borderRadius: 10 }} />
//                 <View style={{ marginLeft: 20 }}>
//                   <Text numberOfLines={2} ellipsizeMode="tail" style={{ fontSize: 16, fontWeight: "bold", width: 120 }}>
//                     {veg.name}!
//                   </Text>
//                   <Text style={{ fontSize: 12 }}>Price: ${veg.price}</Text>
//                 </View>
//               </View>
//               <View style={{ alignItems: "center", gap: 10 }}>
//                 <View style={{ flexDirection: "row", alignItems: "center" }}>
//                   <Text>Qty: {veg.unit}</Text>
//                   <Text>Qty: {reduxData.cart[reduxData.cart.findIndex((item) => item.id == veg.id)] && reduxData.cart[reduxData.cart.findIndex((item) => item.id == veg.id)].quantity}</Text>
//                   <Text>Price: {reduxData.cart[reduxData.cart.findIndex((item) => item.id == veg.id)] && reduxData.cart[reduxData.cart.findIndex((item) => item.id == veg.id)].totalPrice}</Text>
//                 </View>
//                 <View style={{ flexDirection: "row", marginLeft: 10 }}>
//                   <TouchableOpacity style={{ padding: 10, backgroundColor: "lightgray", borderRadius: 5 }} onPress={() => HandleIncrement(veg)}>
//                     <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "700" }}>+</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity style={{ padding: 10, backgroundColor: "lightgray", borderRadius: 5, marginLeft: 5 }} onPress={() => handleDecrement(veg)}>
//                     <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "700" }}>-</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </TouchableOpacity>
//         );
//       })}
//     </ScrollView>
//   );
// };

// export default GetAllProducts;

// .....Third time

import React from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
// import { fetchProducts } from "../fetchProducts";

import {useState, useEffect} from 'react';
// import { generateClient } from 'aws-amplify/api';
import {generateClient} from 'aws-amplify/api';

import {Amplify} from 'aws-amplify';
import styles from './style';

import {useSelector, useDispatch} from 'react-redux';
// import { AddProduct, removeItem } from "../redux/slice/Product";
import {addToCart, removeFromCart} from '../../redux/slice/customerSlice';

const GetAllProducts = () => {
  const dispatch = useDispatch();

  const client = generateClient();
  const route = useRoute();
  console.log(route.params.category);
  console.log(route.params.catProducts);

  const Pdata = route.params.catProducts;

  // console.log(Pdata);
  // const Pdata = useSelector(state => state.getAllProducts);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Pdata.length > 0) {
      setLoading(false);
    }
  }, [Pdata]);

  const category = route.params.category;

  console.log(category);
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = Pdata.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  console.log('it the filter ', filteredProducts);

  const navigation = useNavigation();

  const reduxData = useSelector(state => state.CustomerSlice);
  // console.log(reduxData)
  console.log(reduxData.cart);

  let mappredux = reduxData.cart.map(e => e.id);
  console.log({...mappredux});

  const HandleIncrement = veg => {
    const data = dispatch(addToCart(veg));
    console.log(data.payload);

    console.log(reduxData);
  };

  const handleDecrement = veg => {
    dispatch(removeFromCart(veg.id));
    console.log(veg.id);
  };

  const handleProduct = prod => {
    console.log('navigate to product');
    navigation.navigate('Categorys', {value: prod});
    console.log('navigate to product 2');
  };

  const handleCart = () => {
    console.log('navigate to cart');
    navigation.navigate('Checkout');
    console.log('navigate to Checkout ');
  };
  /////   for calculating price /////
  const calculateTotalPrice = reduxData => {
    return reduxData.reduce((totalPrice, orderItem) => {
      // console.log('This is total price : '+totalPrice)
      const itemTotalPrice = orderItem.price * orderItem.quantity; // Calculate total per item
      return totalPrice + itemTotalPrice; // Accumulate total price
    }, 0); // Initial value for accumulator (0)
  };

  const [totalPrice, setTotalPrice] = useState(null);
  useEffect(() => {
    if (reduxData.cart) {
      // Check if reduxData exists before calculating
      const newTotalPrice = calculateTotalPrice(reduxData.cart);
      setTotalPrice(newTotalPrice);
      console.log(newTotalPrice);
    }
  }, [reduxData.cart]);

  const data = filteredProducts ? filteredProducts : Pdata;

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          flexWrap: 'wrap',
          // gap:2,
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          // alignItems: 'center',
          color: 'black',
          overflow: 'scroll',
        }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <ScrollView style={{flex: 1}}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search Product"
        placeholderTextColor="black"
        onChangeText={setSearchTerm}></TextInput>
      <TouchableOpacity
        onPress={handleCart}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',

            paddingHorizontal: 20,
            paddingTop: 20,
            paddingBottom: 20,
          }}>
          <View
            style={{
              fontWeight: '700',
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
            }}>
            <Text
              style={{
                display: 'flex',
                flexDirection: 'row',
                height: 30,
                fontWeight: 700,
                alignSelf: 'flex-start',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',

                width: '100%',
                color: 'black',
              }}>
              {
                totalPrice === null // Check for null to handle empty initial state
                  ? 'Calculating total price...' // Display loading message or placeholder
                  : `Total Price: ${totalPrice.toFixed(2)}
                  `
                // Display calculated total price
              }
            </Text>

            <Text style={{width: '100%', fontWeight: 700, color: 'black'}}>
              orders: {reduxData.cart?.length}
            </Text>
          </View>
          <Text
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: 100,
              height: 50,
              paddingHorizontal: 16,
              paddingTop: 13,
              borderRadius: 10,
              backgroundColor: 'blue',
              fontWeight: 700,
              color: 'white',
              paddingHorizontal: 18,
              paddingTop: 14,
            }}>
            Checkout
          </Text>
        </View>
      </TouchableOpacity>

      {(data.length > 0) ? (
        data.map(veg => {
          return (
            <TouchableOpacity
              onPress={() => {
                handleProduct(veg);
              }}
              key={veg.id}>
              <View
                style={{
                  flexDirection: 'row',
                  padding: 10,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: 'lightgray',
                  margin: 2,
                  color: 'black',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={{
                      uri: `${veg.image}`,
                    }}
                    style={{width: 70, height: 70, borderRadius: 10}}
                  />
                  <View style={{marginLeft: 20}}>
                    <Text
                      numberOfLines={2}
                      ellipsizeMode="tail"
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        width: 120,
                        color: 'black',
                      }}>
                      {veg.name}!
                    </Text>
                    <Text>
                      {/* Quantity: {veg.quantity || 1}, Total: $ */}
                      {/* {calculateItemPrice(veg) } */}
                    </Text>
                    <Text style={{fontSize: 12, color: 'black'}}>
                      Price: ₹{veg.price}
                    </Text>
                  </View>
                </View>
                <View style={{alignItems: 'center', gap: 10}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View>
                      <Text style={{color: 'black'}}>Qty: {veg.unit}</Text>

                      <Text style={{color: 'black'}}>
                        Qty:{' '}
                        {/* {reduxData.Data[0] && reduxData.Data[0].quantity} */}
                        {reduxData.cart[
                          reduxData.cart.findIndex(item => item.id == veg.id)
                        ] &&
                          reduxData.cart[
                            reduxData.cart.findIndex(item => item.id == veg.id)
                          ].quantity}
                      </Text>
                      <Text style={{color: 'black'}}>
                        Price:
                        {reduxData.cart[
                          reduxData.cart.findIndex(item => item.id == veg.id)
                        ] &&
                          reduxData.cart[
                            reduxData.cart.findIndex(item => item.id == veg.id)
                          ].totalPrice.toFixed(2)}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', marginLeft: 10}}>
                      <TouchableOpacity
                        style={{
                          padding: 10,
                          backgroundColor: 'blue',
                          borderRadius: 5,
                         
                        }}
                        onPress={() => {
                          HandleIncrement(veg);
                        }}>
                        <Text
                          style={{
                            textAlign: 'center',
                            fontSize: 16,
                            fontWeight: '700',
                            color:'white'
                          }}>
                          +
                        </Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={{
                          padding: 10,
                          // backgroundColor: 'lightgray',
                          backgroundColor: 'blue',
                          color:'black',


                          borderRadius: 5,
                          marginLeft: 5,
                        }}
                        onPress={() => {
                          handleDecrement(veg);
                        }}>
                        <Text
                          style={{
                            textAlign: 'center',
                            fontSize: 16,
                            fontWeight: '700',
                            color:'white'

                          }}>
                          -
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <Text style={{fontWeight: '700'}}>
                    {/* Total: ${calculateItemPrice(veg)} */}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })
      ) : (
        <Text 
        style={{
          width:'100%',
          flexDirection: 'row',
          paddingHorizontal: 10,
          paddingLeft:20,
          justifyContent: 'center',
          alignItems: 'center',
          // borderWidth: 1,
          // backgroundColor: 'lightgray',
          fontSize:20,
          fontWeight:'700',
          color: 'black',
        }}>No related items to Show</Text>
      )}
    </ScrollView>
  );
};

export default GetAllProducts;
