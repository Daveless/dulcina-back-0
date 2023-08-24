import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: {
    cartLength:0
  },
};

export const filter = createSlice({
  name: "filter",
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
} = filter.actions;
export default filter.reducer