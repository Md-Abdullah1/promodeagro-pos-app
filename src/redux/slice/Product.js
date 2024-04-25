// import {createSlice} from '@reduxjs/toolkit';

// const Products = createSlice({
//   name: 'Products',
//   initialState: {Data: []},

//   reducers: {
//     // AddProduct(state, action){
//     //     //  console.log(action.payload.id)
//     //     // console.log( state.Data.includes(action.payload.id))
//     //      state.Data.push({ ...action.payload, quantity:1 })
//     //  console.log(   'value',state.Data.reduce((e)=>{ if(e.id === action.payload.id)return true}))
//     //  if(state.Data.reduce((e)=>{ if(e.id === action.payload.id)return true})){
//     //     state.Data.quantity = state.Data.quantity + 1
//     //  }

//     // },

//     // AddProduct(state, action) {
//     //     // Find existing item with the same ID
//     //     const existingItem = state.Data.find(item => item.id === action.payload.id);

//     //     // If item exists, update its quantity
//     //     if (existingItem) {
//     //       existingItem.quantity++; // Modify the draft directly (Immer handles immutability)
//     //     } else {
//     //       // If item doesn't exist, add it with initial quantity 1
//     //       return { ...state, Data: [...state.Data, { ...action.payload, quantity: 1 }] };
//     //     }
//     //   }
//     AddProduct(state, action) {
//       // Find existing item with the same ID
//       const existingItem = state.Data.find(
//         item => item.id === action.payload.id,
//       );

//       // If item exists, update its quantity
//       if (existingItem) {
//         console.log('existing', existingItem);
//         existingItem.quantity++;
//         existingItem.totalPrice = existingItem.price * existingItem.quantity;
//         console.log('existing', existingItem);
//         // Modify the draft directly (Immer handles immutability)
//       } else {
//         // If item doesn't exist, add it with initial quantity 1
//         // state.total++;
//         return {
//           ...state,
//           Data: [
//             ...state.Data,
//             {
//               ...action.payload,
//               quantity: 1,
//               totalPrice: action.payload.price * 1,
//             },
//           ],
//         };
//       }
//     },

//     // removeItem(state, action) {
//     //     // Filter out the item to be removed based on its specific property (e.g., 'id'):
//     //     const itemIdToRemove = action.payload; // Retrieve the ID of the item to remove
//     //     const updatedData = state.Data.filter((item) => item.id !== itemIdToRemove);
//     //     return { ...state, Data: updatedData }; // Update entire state with updated data
//     //   },

//     removeItem(state, action) {
//       // Retrieve the ID of the item to remove from the action payload
//       const itemIdToRemove = action.payload;

//       // Find the index of the item in the data array
//       const itemIndex = state.Data.findIndex(
//         item => item.id === itemIdToRemove,
//       );

//       // Check if the item exists
//       if (itemIndex !== -1) {
//         // Immer provides a draft state for direct modification
//         // No need to create a copy of the Data array
//         if (state.Data[itemIndex].quantity > 1) {
//           state.Data[itemIndex].quantity--;
//           state.Data[itemIndex].totalPrice =
//             state.Data[itemIndex].price * state.Data[itemIndex].quantity; // Modify draft directly
//         } else {
//           state.Data.splice(itemIndex, 1); // Modify draft directly
//         }
//       }

//       // Immer handles returning the modified state
//       return; // No need to return anything explicitly
//     },

//     removeCart(state, action) {
//       state.Data = [];
//     },
//   },
// });

// export const {AddProduct, removeItem, removeCart} = Products.actions;
// export default Products.reducer;
