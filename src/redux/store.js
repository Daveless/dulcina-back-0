import {configureStore} from "@reduxjs/toolkit"
import filterReducer from "./features/filter-slice"

export const store = configureStore({
    reducer: {
        filterReducer,
    }
})

