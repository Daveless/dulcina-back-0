import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const { BACK_URL } = process.env;

const initialState = {
  postedCategory:{},
  allCategories: [],
  error: "",
};
export const fetchCategories = createAsyncThunk("category/fetchCategories", async () => {
  const res = await axios.get(
    "https://dulcina-backend.onrender.com/categories"
  );
  return res.data;
});

export const postCategory = createAsyncThunk("category/postCategories", async (body) => {
  const category = {
    name: body.name
  }
  const res = await axios.post(
    "https://dulcina-backend.onrender.com/categories", category, {
      headers:{Authorization:`Bearer ${body.token}`}
    }
  );
  return res.data;
});

export const products = createSlice({
  name: "products",
  initialState,  
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.allCategories = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.error = action.payload
    });    
    builder.addCase(postCategory.fulfilled, (state, action) => {
      state.postedCategory = action.payload
    });
    builder.addCase(postCategory.rejected, (state, action) => {
      state.error = action.payload
    });
  },
});

export default products.reducer;
