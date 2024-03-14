import React from "react";

const FiltersItem = ({
  name,
  label,
  value,
  nombre,
  onChange,
  categoryInput,
}) => {
  return (
    <>
      <div className="flex items-center mb-[5px]">
        <input
          className="mr-[10px]"
          checked={categoryInput == value}
          nombre={nombre}
          type="radio"
          value={value}
          onClick={onChange}
          name={name}
        ></input>
        <label>{label}</label>
      </div>
    </>
  );
};

export default FiltersItem;
