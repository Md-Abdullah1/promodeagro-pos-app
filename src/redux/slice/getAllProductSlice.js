// import { fetchProducts } from '../../fetchProducts';

import {createSlice} from '@reduxjs/toolkit';

// export const fetchProductsAsync = createAsyncThunk('products/fetchProducts', async () => {
//     return await fetchProducts();
//   });

const getAllProductSlice = createSlice({
  name: 'getAllProducts',
  initialState: [],
  reducers: {
    AddAllProducts(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const {AddAllProducts} = getAllProductSlice.actions;
export default getAllProductSlice.reducer;
