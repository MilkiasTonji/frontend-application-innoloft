import { configureStore } from '@reduxjs/toolkit'

import productReducer from './features/productSlice'
import configReducer from './features/configSlice'



export const store = configureStore({
  reducer: {
    product: productReducer,
    config: configReducer

  },
})

