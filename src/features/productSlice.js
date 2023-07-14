import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from 'axios';

const TIMEOUT_DURATION = 30000;

axios.defaults.timeout = TIMEOUT_DURATION;


const BASE_URL = 'https://api-test.innoloft.com/'

const initialState = {
    loading: false,
    product: {},
    error: ""
}

const fetchDataService = async () => {
    try {
        const response = await axios.get(`${BASE_URL}product/6781/`);
        if(response.data){
            // console.log("ddddddddddddddddddddddddddddddddddd", response.data)
            return response.data;  
        }
    } catch (error) {
        return error
    }
}

const editDataService = async (data) => {
    try {
        const response = await axios.put(`${BASE_URL}product/6781/`, data);
        if(response.data){
            return response.data;  
        }
    } catch (error) {
        return error
    }
}


export const fetchProduct = createAsyncThunk('protuct/fetchProduct', async (_, {rejectWithValue}) => {
    try {
        const response = await fetchDataService();
        return response
    } catch (error) {
        return rejectWithValue(error.message);
    }
})


export const editProduct = createAsyncThunk('protuct/editProduct', async (data, {rejectWithValue}) => {
    try {
        const response = await editDataService(data);
        return response
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchProduct.pending, (state, action) => {
                state.loading = true
                state.error = ""
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.loading = false
                state.product = action.payload
                state.error = ""
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.product = ""
            })
            // edit part

            .addCase(editProduct.pending, (state, action) => {
                state.loading = true
                state.error = ""
            })
            .addCase(editProduct.fulfilled, (state, action) => {
                state.loading = false
                state.product = action.payload
                state.error = ""
            })
            .addCase(editProduct.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.product = ""
            })
    }
})


export const getProduct = (state) => state.product
export const getLoaging = (state) => state.loading


export default productSlice.reducer