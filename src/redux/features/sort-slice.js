import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  sortInput: "",
};

export const sort = createSlice({
  name: "sort",
  initialState,
  reducers: {
    changeSortInput: (state, action) => {       
      return {
        sortInput: action.payload,
      };
    },
  },
});

export const selectSortInput = (state) => state.sortInput;

export const { changeSortInput } = sort.actions;
export default sort.reducer;
