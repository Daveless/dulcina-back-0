import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const { BACK_URL } = process.env;

const initialState = {
  allProducts: [],
  error: "",
};
export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const res = await axios.get(
      "https://dulcina-backend.onrender.com/products"
    );
    return res.data;
  }
);

export const products = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.allProducts = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default products.reducer;
