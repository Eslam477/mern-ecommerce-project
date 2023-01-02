import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import consts from '../../../consts.js'



export const getProductData = createAsyncThunk('product/getProductData', async (args) => {
    return axios.get(consts.server_url + `collection/products/${args.id}`).then((data) => {
        return data
    })


})
const initialState = { value: 0 };
export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        increment(state) {
            state.value++
        }
    },
    extraReducers: {
        [getProductData.pending]: (state, action) => {
            console.log(action)
        }
    }
})




export default productSlice.reducer
export const { increment } = productSlice.actions