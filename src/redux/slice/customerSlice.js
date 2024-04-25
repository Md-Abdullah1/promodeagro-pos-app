import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
// import {creatingOrder} from '../../Api/createOrder';
// import { creatingOrder } from '../../api/createOrder';
//  import {useDispatch} from 'react-redux'
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import {creatingCustomer} from '../../Api/createCustomer';

// // const dispatch = useDispatch();

const CustomerSlice = createSlice({
  name: 'CustomerSlice',
  initialState: {
    orders: [],
    cart: [],
    // customerToSend: [],
    customers: [],
    // users: [],
    loading: false,
    isSignedIn: false,
    error: null,
  },
  reducers: {
    toggleSignIn: (state, action) => {
      state.isSignedIn = !state.isSignedIn;
    },
    addOrders: (state, action) => {
      const existingOrder = state.orders.findIndex(
        item => item.id === action.payload.id,
      );

      console.log('finding index of order', existingOrder);
      console.log('action to add order', action.payload);

      if (existingOrder === -1) {
        state.orders.push(action.payload);
        console.log('in redux dispathing orders ', action.payload);
      } else {
        console.log('previouse order', existingOrder);
        state.orders.splice(existingOrder, 1, action.payload);
        console.log(`updated order ${action.payload}`);
      }
    },
    addCustomer: (state, action) => {
      state.customers.push(action.payload);
      console.log('added user in slice', action.payload);
    },
    // addToCart: (state, action) => {
    //   // Find existing item with the same ID
    //   const existingItem = state.cart.find(
    //     item => item.id === action.payload.id,
    //   );

    //   // If item exists, update its quantity
    //   if (existingItem) {
    //     console.log('existing', existingItem);
    //     existingItem.quantity++;
    //     existingItem.totalPrice = existingItem.price * existingItem.quantity;
    //     console.log('existing', existingItem);

    //     // localStorage.setItem('cart', JSON.stringify(state.cart));
    //     // Modify the draft directly (Immer handles immutability)
    //   } else {
    //     // If item doesn't exist, add it with initial quantity 1
    //     // state.total++;
    //     return {
    //       ...state,
    //       cart: [
    //         ...state.cart,
    //         action.payload.hasOwnProperty('quantity')
    //           ? {...action.payload}
    //           : {
    //               ...action.payload,
    //               quantity: 1,
    //               totalPrice: action.payload.price * 1,
    //             },
    //       ],
    //     };
    //   }
    //   // AsyncStorage.setItem('cart', JSON.stringify(state.cart));
    // },

     addToCart: (state, action) => {
        // Find existing item with the same ID
        const existingItem = state.cart.find(
          item => item.id === action.payload.id && item.unit == action.payload.unit,
        );

        const existingIndex = state.cart.indexOf(action.payload);

        // If item exists, update its quantity
        console.log(existingItem);
        console.log(action.payload.unit);
        console.log(existingItem,"000");
        if (existingItem) {
          if (action.payload.unit != existingItem.unit) {
            if (
              // action.payload.unit == 'KG' &&
              // existingItem.quantity == 'KG' &&
              action.payload.hasOwnProperty('quantity')
            ) {
              console.log(existingItem.quantity);
              console.log('working');
              existingItem.quantity += parseInt(action.payload.quantity);
            }
            //changes made
            else {
              state.cart.push(action.payload);
            }
          } else {
            console.log('existing', existingItem);
            console.log(action.payload);
            console.log(existingItem.quantity);
            (action.payload = action.payload.hasOwnProperty('quantity')
              ? {...action.payload}
              : {
                  ...action.payload,
                  quantity: 1,
                  totalPrice: action.payload.price * 1,
                }),
              (existingItem.quantity += action.payload.quantity);
            existingItem.totalPrice = existingItem.price * existingItem.quantity;
            console.log('existing', existingItem);
          }

          // localStorage.setItem('cart', JSON.stringify(state.cart));
          // Modify the draft directly (Immer handles immutability)
        } else {
          // state.cart.push({ ...action.payload, quantity: 1, totalPrice: action.payload.price }); // Add item with quantity 1
          state.cart.push(
            action.payload.hasOwnProperty('quantity')
              ? {...action.payload}
              : {
                  ...action.payload,
                  quantity: 1,
                  totalPrice: action.payload.price * 1,
                },
          ); // Add item with quantity 1
        }
      },

    //   const {cart} = state;
    //   const {id, unit, quantity} = action.payload;

    //   // Check if an item with the same ID and unit exists in the cart
    //   const existingItemIndex = cart.findIndex(
    //     item => item.id === id && item.unit === unit,
    //   );

    //   if (existingItemIndex !== -1) {
    //     // If item exists, update its quantity
    //     state.cart[existingItemIndex].quantity += parseInt(quantity);
    //     state.cart[existingItemIndex].totalPrice =
    //       state.cart[existingItemIndex].price *
    //       state.cart[existingItemIndex].quantity;
    //   } else {
    //     // If item doesn't exist, add it to the cart
    //     const newItem = {
    //       ...action.payload,
    //       quantity: quantity ? quantity : 1,
    //       totalPrice: action.payload.price * quantity,
    //     };
    //     state.cart.push(newItem);
    //   }
    // },

    // removeFromCart: (state, action) => {
    //   // Retrieve the ID of the item to remove from the action payload
    //   const itemIdToRemove = action.payload;

    //   // Find the index of the item in the data array
    //   const itemIndex = state.cart.findIndex(
    //     item => item.id === itemIdToRemove,
    //   );
    //   // Check if the item exists
    //   if (itemIndex !== -1) {
    //     // Immer provides a draft state for direct modification
    //     // No need to create a copy of the Data array
    //     if (state.cart[itemIndex].quantity > 1) {
    //       state.cart[itemIndex].quantity--;
    //       state.cart[itemIndex].totalPrice =
    //         state.cart[itemIndex].price * state.cart[itemIndex].quantity; // Modify draft directly
    //     } else {
    //       state.cart.splice(itemIndex, 1); // Modify draft directly
    //     }
    //   }
    //   // Immer handles returning the modified state
    //   // AsyncStorage.setItem('cart', JSON.stringify(state.cart));
    //   return; // No need to return anything explicitly
    // },

    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      const itemIndex = state.cart.findIndex(
        item => item.id === itemIdToRemove,
      );

      if (itemIndex !== -1) {
        if (state.cart[itemIndex].quantity > 1) {
          state.cart[itemIndex].quantity--; // Decrease quantity if greater than 1
          state.cart[itemIndex].totalPrice =
            state.cart[itemIndex].price * state.cart[itemIndex].quantity;
        } else {
          state.cart.splice(itemIndex, 1); // Remove item if quantity is 1
        }
      }
    },

    emptyCart: (state, action) => {
      state.cart = [];
    },
    // customerToSend: (state, action) => {
    //   state.cartCustomer = action.payload;
    // },
  },
});
export default CustomerSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  addOrders,
  addCustomer,
  emptyCart,
  toggleSignIn,
  // customerToSend,
} = CustomerSlice.actions;
