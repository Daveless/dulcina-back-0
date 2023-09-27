import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const { BACK_URL } = process.env;

const initialState = {
  postedProduct:{},
  allProducts: [],
  error: "",
};
export const fetchProducts = createAsyncThunk("product/fetchProducts", async () => {
  const res = await axios.get(
    "https://dulcina-backend.onrender.com/products"
  );
  return res.data;
});
export const postProduct = createAsyncThunk("product/postProduct", async (body) => {
  const product = {
    name: body.name,
    description: body.description,
    highlight_date: body.highlighDate,
    imageUrl: body.image,
    price: body.price,
    categoryId: 1
  }
  const res = await axios.post(
    "https://dulcina-backend.onrender.com/products", product, {
      headers:{Authorization:`Bearer ${body.token}`}
    }
  );
  return res.data;
});

export const products = createSlice({
  name: "products",
  initialState,  
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.allProducts = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = action.payload
    });
    builder.addCase(postProduct.fulfilled, (state, action) => {
      state.postedProduct = action.payload
    });
    builder.addCase(postProduct.rejected, (state, action) => {
      state.error = action.payload
    });
  },
});

export default products.reducer;
