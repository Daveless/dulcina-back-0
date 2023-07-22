import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const computeFilteredData = (
  products,
  categoryFilter,
  genereFilter,
  priceFilter
) =>
  products.filter(
    (product) =>
      (!categoryFilter || product.category === categoryFilter) &&
      (!genereFilter || product.genere === genereFilter) &&
      (!priceFilter || product.price === priceFilter)
  );

const initialState = {
  value: {
    filtered: [],
    byGenere: "",
    byCategory: "",
    byPrice: [3,50],
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
      console.log(state.value.byGenere);
      console.log(state.value.byCategory);
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
export default filter.reducer