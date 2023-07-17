"use client"

import React, { useState } from "react";
import FileList from "./FiltersItem";
import ReactSlider from "react-slider";

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

const Filters = () => {
    const MIN = 3
    const MAX = 50
  const [values, setValues] = useState([MIN,MAX]);

  console.log(values);

  return (
    <>
      <div className="flex flex-col w-[500px]">
        <h2>Categorias</h2>
        {ArrayCategories.map((c) => (
          <FileList key={c.id} id={c.id} label={c.label} name={c.name} />
        ))}
        <h2>Genero</h2>
        {ArrayGenere.map((c) => (
          <FileList key={c.id} id={c.id} label={c.label} name={c.name} />
        ))}
        <h2>Precio</h2>
        <ReactSlider className="slider" onChange={setValues} value={values} min={MIN}  max={MAX}/>
        <h1>{values[0]} - {values[1]}</h1>
      </div>
    </>
  );
};

export default Filters;
