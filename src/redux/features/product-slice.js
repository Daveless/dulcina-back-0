import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const { BACK_URL } = process.env;

const initialState = {
  postedProduct:{},
  allProducts: [],
  copyAllProducts: [],
  product:{},
  patchProduct:"",
  error: "",
};
export const fetchProducts = createAsyncThunk("product/fetchProducts", async () => {
  const res = await axios.get(
    "https://dulcina-backend.onrender.com/products"
  );
  return res.data;
});
export const fetchProduct = createAsyncThunk("product/fetchProduct", async (id) => {
  const res = await axios.get(
    `https://dulcina-backend.onrender.com/products/${id}`
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
    categoryId: body.categoryId
  }
  const res = await axios.post(
    "https://dulcina-backend.onrender.com/products", product, {
      headers:{Authorization:`Bearer ${body.token}`}
    }
  );
  return res.data;
});
export const patchTimesSoldProduct = createAsyncThunk("product/patchTimesSoldProduct", async (id) => {
  const add_times_sold = {
    add_times_sold:1
  }
  const res = await axios.patch(
    `https://dulcina-backend.onrender.com/products/addTimesSold/${id}`, add_times_sold
  );
  return res.data;
});

export const products = createSlice({
  name: "products",
  initialState,  
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.allProducts = action.payload;
      state.copyAllProducts = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = action.payload
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.product = action.payload.product;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.error = action.payload
    });
    builder.addCase(postProduct.fulfilled, (state, action) => {
      state.postedProduct = action.payload
    });
    builder.addCase(postProduct.rejected, (state, action) => {
      state.error = action.payload
    });
    builder.addCase(patchTimesSoldProduct.fulfilled, (state, action) => {
      state.patchProduct = "success"
    });
    builder.addCase(patchTimesSoldProduct.rejected, (state, action) => {
      state.error = action.payload
    });
  },
});

export default products.reducer;
