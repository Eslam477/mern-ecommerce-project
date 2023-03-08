import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import consts from '../../../consts.js'



export const getProductData = createAsyncThunk('product/getProductData', async (args) => {
    const Url = `${consts.server_url}/products/${args.id}`
    console.log("🚀 ~ file: productSlice.js:10 ~ getProductData ~ Url:", Url)
    return axios.get(Url).then((data) => {
        return data
    })
})

const initialState = {
    productData: {
    }
};
export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
    extraReducers: {
        [getProductData.pending]: (state, action) => {
            console.log('loading.....')
        },
        [getProductData.fulfilled]: (state, action) => {
            state.productData.id = action.payload.data[0].id
            state.productData.name = action.payload.data[0].name
            state.productData.description = action.payload.data[0].description
            state.productData.price = action.payload.data[0].price
            state.productData.count = action.payload.data[0].count
            console.log(action.payload.data)
        }
    }
})




export default productSlice.reducer
export const { increment } = productSlice.actions