import React from "react";

const FiltersItem = ({ name, label, onChange }) => {
  return (
    <>
      <div className="flex items-center mb-[5px]">
        <input className="mr-[10px]" type="radio" value={label} onClick={onChange} name={name}></input>
        <label>{label}</label>
      </div>
    </>
  );
};

export default FiltersItem;
