import { configureStore } from '@reduxjs/toolkit'
import productSlice from './slices/productSlice'

var store = configureStore({
    reducer: {
        productSlice
    }
})


export default store