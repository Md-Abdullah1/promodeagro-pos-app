import React ,{ useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
//redux
import {store} from './src/redux/store/store';
import {Provider, useSelector} from 'react-redux';

//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Home from './src/components/Home';
import Adduser from './src/components/Adduser';
import Checkout from './src/components/Checkout';
import Cash from './src/components/Cash/index.js';
import Customers from './src/components/Customer';
import Share from './src/components/Share/index.js'
// import Settings from './src/components/Setting';
// import Settings from './src/components/setting/index.js';
import Settings from './src/components/setting/index.js';
import Products from './src/components/Products';
// import ProductsList from './src/components/ProductList';
import ProductsList from './src/components/ProductList/index.js'
import ProductPage from './src/components/ProductPage/index.js';
import Orders from './src/components/Orders/index.js';
import PrintToA4 from './src/components/Print/index.js';
// import productPrinter from './src/components/productPrinter';
import Order from './src/components/Order/index.js';
import UpdateProducts from './src/components/updateProducts/index.js';
import Signin from "./src/components/Signin/index.js";
import Otp from "./src/components/Otp/index.js";
import Signup from "./src/components/Signup/index.js";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// const HomeScreen = () => (
//   <Stack.Navigator
//     screenOptions={{
//       headerShown: false,
//     }}>
//    { !isSignedIn && <Stack.Screen name="Signin" component={Signin} />}
//    { !isSignedIn && <Stack.Screen name="Signup" component={Signup} />}
//    { !isSignedIn && <Stack.Screen name="Otp" component={Otp} />}
//     <Stack.Screen name="HomePage" component={Home} />
//     <Stack.Screen name="Adduser" component={Adduser} />
//     <Stack.Screen name="Cash" component={Cash} />
//     <Stack.Screen name="Share" component={Share} />
//     <Stack.Screen name="Checkout" component={Checkout} />
//     <Stack.Screen name="Customers" component={Customers} />
//   </Stack.Navigator>
// );

const SettingScreen = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Settings" component={Settings} />
    <Stack.Screen name="Customers" component={Customers} />
    <Stack.Screen name="PrintToA4" component={PrintToA4} />
    {/* <Stack.Screen name="productPrinter" component={productPrinter} /> */}
  </Stack.Navigator>
);

const OrdersScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="OrdersPage" component={Orders} />
    {/* <Stack.Screen name="Receipt" component={Receipt} /> */}
    <Stack.Screen name="Order" component={Order} />
  </Stack.Navigator>
);

const ProductsScreen = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
    }}>
    <Stack.Screen name="ProductsPage" component={Products} />
    <Stack.Screen name="Categorys" component={ProductPage} />
    <Stack.Screen name="UpdateProducts" component={UpdateProducts} />
    <Stack.Screen name="Customers" component={Customers} />
    <Stack.Screen name="Checkout" component={Checkout} />
    <Stack.Screen name="Cash" component={Cash} options={{ headerShown: false }} />
    <Stack.Screen name="Share" component={Share} options={{ headerShown: false }} />
    <Stack.Screen name="ProductsList" component={ProductsList} />
  </Stack.Navigator>
);

const screenOptions = ({ route }) => ({
  tabBarHideOnKeyboard: true,
  tabBarIcon: ({ color, size }) => {
    let iconName;
    switch (route.name) {
      case 'Home':
        iconName = 'home-outline';
        break;
      case 'Setting':
        iconName = 'settings-outline';
        break;
      case 'Products':
        iconName = 'cube-outline';
        break;
      case 'Orders':
        iconName = 'cart-outline'; 
        break;
      default:
        iconName = 'alert-circle-outline';
        
    }
    // Use the iconName determined by the switch statement
    return <Ionicons name={iconName} size={size} color={color} />;
  },
 tabBarActiveTintColor: 'blue'

});


const App = () => {
  // const [isSignedIn, setIsSignedIn] = useState(false);
  const isSignedIn = useSelector(state => state.CustomerSlice.isSignedIn);

  
  function changeSignIn(value){
    setIsSignedIn(value);
  }
  const HomeScreen = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
     {/* { !isSignedIn && <Stack.Screen name="Signin" component={Signin} />}
     { !isSignedIn && <Stack.Screen name="Signup" component={Signup} />}
     { !isSignedIn && <Stack.Screen name="Otp" component={Otp} />} */}
      <Stack.Screen name="HomePage" component={Home} />
      <Stack.Screen name="Adduser" component={Adduser} />
      <Stack.Screen name="Cash" component={Cash} />
      <Stack.Screen name="Share" component={Share} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Customers" component={Customers} />
    </Stack.Navigator>
  );

  return (
    // <Provider store={store}>
  <NavigationContainer>
    {!isSignedIn ? (
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Products"
          component={ProductsScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Orders"
          component={OrdersScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    ) : (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <>
          <Stack.Screen name="Signin">
            {() => <Signin  />}
          </Stack.Screen>
          <Stack.Screen 
            name="Otp" 
            component={Otp} 
            // initialParams={{ setIsSignedIn: changeSignIn }} 
          />
          <Stack.Screen name="Signup" component={Signup} />
        </>
      </Stack.Navigator>
    )}
  </NavigationContainer>
// </Provider>

  );
};

export default App;
