import {configureStore} from "@reduxjs/toolkit"
import filterReducer from "./features/filter-slice"
import productsReducer from "./features/product-slice"
import cartReducer from "./features/cart-slice"
import userReducer from "./features/user-slice"
import categoryReducer from "./features/category-slice"

export const store = configureStore({
    reducer: {
        filterReducer,
        productsReducer,
        cartReducer,
        userReducer,
        categoryReducer
    }
})

