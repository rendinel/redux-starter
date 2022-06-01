import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'
//02 our initial state
const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
}

//02 we create the cartslice with the createslice and pass it a name and the initial state
const cartSlice = createSlice({
  name: 'cart',
  initialState,
})

//02 we export our cartSlice.reducer
export default cartSlice.reducer
