import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './future/cartSlice'
const store = configureStore({
    reducer:{
        cart : cartReducer,
    },
})

export default store;