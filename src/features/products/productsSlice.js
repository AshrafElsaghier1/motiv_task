import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './productsApi';

const initialState = {
  products: [],
  recommendedCars: [],
  isLoading: false,
  isError: false
};

export const getProducts = createAsyncThunk("products/getProducts", async (args, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    const response = await fetchProducts("products")
    return response.data

  } catch (error) {
    return rejectWithValue(error.message)
  }

})
export const getRecommendedCars = createAsyncThunk("products/getRecommendedCars", async (args, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    const response = await fetchProducts("recommended")
    return response.data

  } catch (error) {
    return rejectWithValue(error.message)
  }

})

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
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
      .addCase(getRecommendedCars.pending, (state) => {
        state.isLoading = true;
        state.isError = false
      })
      .addCase(getRecommendedCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recommendedCars = action.payload
        state.isError = false
      })
      .addCase(getRecommendedCars.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload
      })

  }
})
export const productsReducer = productsSlice.reducer
