//01 we create the store for our app and inside the reducer obj we pass the cartReducer in order to access the data from it
import { configureStore } from '@reduxjs/toolkit'
//02 we import the cartSlice.reducer and we can name at our preference
import cartReducer from './features/cart/cartSlice'
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})
