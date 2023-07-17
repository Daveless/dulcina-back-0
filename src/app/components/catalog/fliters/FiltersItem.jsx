import React from "react";

const FiltersItem = ({ name, label }) => {
  return (
    <>
      <div className="flex items-center">
        <input type="radio" name={name}></input>
        <label>{label}</label>
      </div>
    </>
  );
};

export default FiltersItem;
