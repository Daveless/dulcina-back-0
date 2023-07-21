"use client";

import React, { useState } from "react";
import FileList from "./FiltersItem";
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
const ArrayGenere = [
  {
    id: 1,
    name: "genero",
    label: "Hombre",
  },
  {
    id: 2,
    name: "genero",
    label: "Mujer",
  },
  {
    id: 3,
    name: "genero",
    label: "Niño",
  },
];

const ArrayProducts = [
  {
    id: 1,
    name: "Fresas y Masmellos",
    image: "https://dulcina.org/imgs/producto9.png",
    price: 16.99,
    category: "Arreglos",
  },
  {
    id: 2,
    name: "Fresas y Masmellos",
    image: "https://dulcina.org/imgs/producto9.png",
    price: 16.99,
    category: "Arreglos",
  },
  {
    id: 3,
    name: "Fresas y Masmellos",
    image: "https://dulcina.org/imgs/producto9.png",
    price: 16.99,
    category: "Casas",
  },
  {
    id: 4,
    name: "Fresas y Masmellos",
    image: "https://dulcina.org/imgs/producto9.png",
    price: 16.99,
    category: "Bombones",
  },
  {
    id: 5,
    name: "Fresas y Masmellos",
    image: "https://dulcina.org/imgs/producto9.png",
    price: 16.99,
    category: "Bombones",
  },
  {
    id: 6,
    name: "Fresas y Masmellos",
    image: "https://dulcina.org/imgs/producto9.png",
    price: 16.99,
    category: "Casas",
  },
  {
    id: 7,
    name: "Fresas y Masmellos",
    image: "https://dulcina.org/imgs/producto9.png",
    price: 16.99,
    category: "Arreglos",
  },
  {
    id: 8,
    name: "Fresas y Masmellos",
    image: "https://dulcina.org/imgs/producto9.png",
    price: 16.99,
    category: "Arreglos",
  },
];

const Filters = () => {
  const dispatch = useDispatch();
  const filtered = useSelector((state) => state.filterReducer.value.filtered);
  console.log(filtered);

  const onChange = (e) => {
    dispatch(ChangeCategoryInput(e.target.value));
    dispatch(filterAll(ArrayProducts));
  };

  const MIN = 3;
  const MAX = 50;
  const [values, setValues] = useState([MIN, MAX]);

  return (
    <>
      <div className="flex flex-col w-[500px]">
        <h2>Categorias</h2>
        {ArrayCategories.map((c) => (
          <FileList
            key={c.id}
            id={c.id}
            onChange={onChange}
            label={c.label}
            name={c.name}
          />
        ))}
        <h2>Genero</h2>
        {ArrayGenere.map((c) => (
          <FileList key={c.id} id={c.id} label={c.label} name={c.name} />
        ))}
        <h2>Precio</h2>
        <ReactSlider
          className="slider"
          onChange={setValues}
          value={values}
          min={MIN}
          max={MAX}
        />
        <h1>
          {values[0]} - {values[1]}
        </h1>
      </div>
    </>
  );
};

export default Filters;
