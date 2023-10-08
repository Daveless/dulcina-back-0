import React from "react";

const FiltersItem = ({ name, label,value, onChange }) => {
  return (
    <>
      <div className="flex items-center mb-[5px]">
        <input className="mr-[10px]" type="radio" value={value} onClick={onChange} name={name}></input>
        <label>{label}</label>
      </div>
    </>
  );
};

export default FiltersItem;
