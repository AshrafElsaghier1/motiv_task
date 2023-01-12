import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './productsApi';

const initialState = {
  products: [],
  isLoading: false,
  isError: false
};

export const getProducts = createAsyncThunk("products/getProducts", async (args, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    const response = await fetchProducts()
    return response.data

  } catch (error) {
    return rejectWithValue(error.message)
  }

})

const productsSlice = createSlice({
  name: "products",
  initialState,

  reducers: {


  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
      state.isError = false
    })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload
        state.isError = false
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload
      })

  }
})
export const productsReducer = productsSlice.reducer
