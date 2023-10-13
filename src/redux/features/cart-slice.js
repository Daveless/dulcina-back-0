import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: {
    cartLength:0
  },
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ChangeCartLength: (state, action) => {
      return {
        value: {
          ...state.value,
          cartLength: action.payload,
        },
      };
    },
  },
});

export const {
    ChangeCartLength,
} = cart.actions;
export default cart.reducer