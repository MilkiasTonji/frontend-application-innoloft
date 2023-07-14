import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from 'axios';

const BASE_URL = 'https://api-test.innoloft.com/configuration/'

const initialState = {
    loading: false,
    config: {},
    error: ""
}

const fetchConfigService = async (appId) => {
    try {
        const response = await axios.get(`${BASE_URL}/${appId}/`);
        if(response.data){
            return response.data;  
        }
    } catch (error) {
        return error
    }
}

export const fetchConfiguration = createAsyncThunk('config/fetchConfiguration', async (appId, {rejectWithValue}) => {
    try {
        
        const response = await fetchConfigService(appId);
        return response
    } catch (error) {
        return rejectWithValue(error.message);
    }
})


const configSlice = createSlice({
    name: "config",
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchConfiguration.pending, (state, action) => {
                state.loading = true
                state.error = ""
            })
            .addCase(fetchConfiguration.fulfilled, (state, action) => {
                state.loading = false
                state.config = action.payload
                state.error = ""
            })
            .addCase(fetchConfiguration.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.config = ""
            })
            
    }
})


export const getConfiguration = (state) => state.config
export const getConfigLoaging = (state) => state.loading


export default configSlice.reducer