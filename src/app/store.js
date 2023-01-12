import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from "../features"
export const store = configureStore({
    reducer: {
        products: productsReducer,

    },
});
