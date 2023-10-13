import { per100 } from "@/assets";
import { createSlice } from "@reduxjs/toolkit";

const computeFilteredData = (products, categoryFilter, priceFilter) => {
  return products?.filter(
    (product) =>
      (!categoryFilter || product.categoryId == categoryFilter) &&
      (!priceFilter ||
        (product.price >= per100(priceFilter[0]) &&
          product.price <= per100(priceFilter[1])))
  );
};

/* {
  return products?.filter((product) => {
    console.log(product.categoryId == categoryFilter);

    (!categoryFilter || product.categoryId == categoryFilter) &&
      (!genereFilter || product.genere == genereFilter) &&
      (!priceFilter || product.price == priceFilter);
  });
}; */

const initialState = {
  value: {
    filtered: [],
    byCategory: {
      id:"",
      name:""
    },
    byPrice: [3, 50],
  },
};

export const filter = createSlice({
  name: "filter",
  initialState,
  reducers: {
    fSortProductsByPop: (state, action) => {
      return {
        ...state,
        filtered: action.payload?.slice().sort((a, b) => b.times_sold - a.times_sold),
      };
    },
    fSortProductsByTime: (state, action) => {
      return {
        ...state,
        filtered: action.payload?.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      };
    },
    clearByCategoryFilter: (state, action) => {
      return {
        value: {
          ...state.value,
          byCategory: {
            id: "",
            name: "",
          },
        },
      };
    },
    clearByPriceFilter: (state, action) => {
      return {
        value: {
          ...state.value,
          byPrice: [3, 50],
        },
      };
    },
    ChangeGenereInput: (state, action) => {
      return {
        value: {
          ...state.value,
          byGenere: action.payload,
        },
      };
    },
    ChangeCategoryInput: (state, action) => {
      return {
        value: {
          ...state.value,
          byCategory: {
            id: action.payload.id,
            name: action.payload.name,
          },
        },
      };
    },
    ChangePriceInput: (state, action) => {
      return {
        value: {
          ...state.value,
          byPrice: action.payload,
        },
      };
    },
    filterAll: (state, action) => {
      return {
        value: {
          ...state.value,
          filtered: computeFilteredData(
            action.payload,
            state.value.byCategory.id,
            state.value.byPrice
          ),
        },
      };
    },
  },
});
export const selectFiltered = (state) => state.filtered;


export const {
  clearByCategoryFilter,
  clearByPriceFilter,
  clearFilter,
  ChangeGenereInput,
  ChangeCategoryInput,
  ChangePriceInput,
  filterAll,
  fSortProductsByPop,
  fSortProductsByTime
} = filter.actions;
export default filter.reducer;
