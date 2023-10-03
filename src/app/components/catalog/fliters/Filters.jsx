"use client";

import React, { useState } from "react";
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

const ArrayCategories = [
  {
    id: 1,
    name: "categorias",
    label: "Arreglos",
  },
  {
    id: 2,
    name: "categorias",
    label: "Bombones",
  },
  {
    id: 3,
    name: "categorias",
    label: "Casas",
  },
];
const ArrayFestivities = [
  {
    id: 1,
    name: "festividad",
    label: "Día de la mujer",
  },
  {
    id: 2,
    name: "festividad",
    label: "Día del padre",
  },
  {
    id: 3,
    name: "festividad",
    label: "Día de la niño",
  },
  {
    id: 4,
    name: "festividad",
    label: "Día de la madre",
  },
  {
    id: 5,
    name: "festividad",
    label: "Navidad",
  },
];

const ArrayProducts = [
  {
    id: 1,
    name: "Fresas y Masmellos",
    image: "https://dulcina.org/imgs/producto9.png",
    price: 16.99,
    category: "Arreglos",
    genere: "Hombre",
  },
  {
    id: 2,
    name: "Fresas y Masmellos",
    image: "https://dulcina.org/imgs/producto9.png",
    price: 16.99,
    category: "Arreglos",
    genere: "Niño",
  },
  {
    id: 3,
    name: "Fresas y Masmellos",
    image: "https://dulcina.org/imgs/producto9.png",
    price: 16.99,
    category: "Casas",
    genere: "Hombre",
  },
  {
    id: 4,
    name: "Fresas y Masmellos",
    image: "https://dulcina.org/imgs/producto9.png",
    price: 16.99,
    category: "Bombones",
    genere: "Niño",
  },
  {
    id: 5,
    name: "Fresas y Masmellos",
    image: "https://dulcina.org/imgs/producto9.png",
    price: 16.99,
    category: "Bombones",
    genere: "Mujer",
  },
  {
    id: 6,
    name: "Fresas y Masmellos",
    image: "https://dulcina.org/imgs/producto9.png",
    price: 16.99,
    category: "Casas",
    genere: "Mujer",
  },
  {
    id: 7,
    name: "Fresas y Masmellos",
    image: "https://dulcina.org/imgs/producto9.png",
    price: 16.99,
    category: "Arreglos",
    genere: "Niño",
  },
  {
    id: 8,
    name: "Fresas y Masmellos",
    image: "https://dulcina.org/imgs/producto9.png",
    price: 16.99,
    category: "Arreglos",
    genere: "Hombre",
  },
];

const Filters = () => {
  const dispatch = useDispatch();
  const filtered = useSelector((state) => state.filterReducer.value.filtered);
  const byPrice = useSelector((state) => state.filterReducer.value.byPrice);
  //console.log(byPrice);

  const onChangeCategory = (e) => {
    dispatch(ChangeCategoryInput(e.target.value));
    dispatch(filterAll(ArrayProducts));
  };
  const onChangeGenere = (e) => {
    dispatch(ChangeGenereInput(e.target.value));
    dispatch(filterAll(ArrayProducts));
  };
  const onChangePrice = (e) => {
    dispatch(ChangePriceInput(e));
    dispatch(filterAll(ArrayProducts));
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

          {ArrayCategories.map((c) => (
            <FiltersItem
              key={c.id}
              id={c.id}
              onChange={onChangeCategory}
              label={c.label}
              name={c.name}
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
