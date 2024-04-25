import {configureStore} from '@reduxjs/toolkit';
import getAllProductSlice from '../slice/getAllProductSlice';
import CustomerSlice from '../slice/customerSlice';
// import Product from '../slice/Product';
export const store = configureStore({
  reducer: {
    CustomerSlice: CustomerSlice,
    getAllProducts: getAllProductSlice,
    // Product:Product
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false, // Disable serializability check
    });
  },
});
