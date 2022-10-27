import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCart: (state, action) => {
      // push objects into an arr
      state.cart.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addCart } = counterSlice.actions

export default counterSlice.reducer