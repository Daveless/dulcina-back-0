import { createSlice } from "@reduxjs/toolkit";

const computeFilteredData = (
  products,
  categoryFilter,
  genereFilter,
  priceFilter
) => {
  return products.filter(
    (product) => !categoryFilter || product.categoryId == categoryFilter
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
    byGenere: "",
    byCategory: "",
    byPrice: [3, 50],
  },
};

export const filter = createSlice({
  name: "filter",
  initialState,
  reducers: {
    clearFilter: () => {
      return initialState;
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
          byCategory: action.payload,
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
            state.value.byCategory,
            state.value.byGenere,
            state.value.byPrice
          ),
        },
      };
    },
  },
});

export const {
  clearFilter,
  ChangeGenereInput,
  ChangeCategoryInput,
  ChangePriceInput,
  filterAll,
} = filter.actions;
export default filter.reducer;
