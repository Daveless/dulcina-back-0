import {configureStore} from "@reduxjs/toolkit"
import filterReducer from "./features/filter-slice"
import productsReducer from "./features/product-slice"

export const store = configureStore({
    reducer: {
        filterReducer,
        productsReducer
    }
})

