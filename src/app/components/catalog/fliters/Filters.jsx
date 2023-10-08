"use client";

import React, { useEffect, useState } from "react";
import FiltersItem from "./FiltersItem";
import ReactSlider from "react-slider";
import "./filters.css";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFilter,
  ChangeGenereInput,
  ChangeCategoryInput,
  ChangePriceInput,
  filterAll,
} from "@/redux/features/filter-slice";
import { fetchCategories } from "@/redux/features/category-slice";
import { capitalize } from "@/assets";


const Filters = () => {
  const dispatch = useDispatch();
  const filtered = useSelector((state) => state.filterReducer.value.filtered);
  const byPrice = useSelector((state) => state.filterReducer.value.byPrice);
  const allCategories = useSelector(
    (state) => state.categoryReducer.allCategories.categories
  );
  const products = useSelector(
    (state) => state.productsReducer.allProducts.products
  );
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const onChangeCategory = (e) => {
    dispatch(ChangeCategoryInput(e.target.value));
    dispatch(filterAll(products));
  };
  const onChangeGenere = (e) => {
    dispatch(ChangeGenereInput(e.target.value));
    dispatch(filterAll(products));
  };
  const onChangePrice = (e) => {
    dispatch(ChangePriceInput(e));
    dispatch(filterAll(products));
  };

  return (
    <>
      <div className="w-[365px] flex justify-end">
        <div className="hidden md:flex flex-col w-[280px] ">
          {/* <h2 className="font-extrabold text-[#222222] text-[30px]">
            Festividad
          </h2>
          <div
            className="w-[100%]  mb-[10px]"
            style={{ borderBottom: "1.5px solid #CFCFCF" }}
          />
          {ArrayFestivities.map((c) => (
            <FiltersItem
              key={c.id}
              id={c.id}
              onChange={onChangeCategory}
              label={c.label}
              name={c.name}
            />
          ))} */}
          <h2 className="font-extrabold text-[#222222] text-[30px]">
            Categorias
          </h2>
          <div
            className="w-[100%] mb-[10px] "
            style={{ borderBottom: "1.5px solid #CFCFCF" }}
          />

          {allCategories?.map((c) => (
            <FiltersItem
              key={c.id}
              id={c.id}
              onChange={onChangeCategory}
              name="category"
              value={c.id}
              label={capitalize(c.name)}
            />
          ))}
          <div className="flex justify-between items-center">
            <h2 className="font-extrabold text-[#222222] text-[30px]">
              Precio
            </h2>
            <p>
              ${byPrice[0]} - ${byPrice[1]}
            </p>
          </div>
          <div
            className="w-[100%] mb-[40px] "
            style={{ borderBottom: "1.5px solid #CFCFCF" }}
          />

          <ReactSlider
            className="slider"
            onChange={onChangePrice}
            value={byPrice}
            min={3}
            max={50}
          />
        </div>
      </div>
    </>
  );
};

export default Filters;
