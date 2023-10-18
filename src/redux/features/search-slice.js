import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  searchInput: "",
};

export const search = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeSearchInput: (state, action) => {
      return {
        searchInput: action.payload,
      };
    },
  },
});

export const { changeSearchInput } = search.actions;
export default search.reducer;
