import React from "react";
import "./SelectInput.css";

const SelectInput = ({ label,onChange,inputName, firstOption, options }) => {
  return (
    <div className="flex flex-col mb-[35px]">
      <label className="text-[22px] text-[#696969]">{label}</label>
      <div className="select">
        <select
          onChange={(e)=>onChange(e,inputName)}
          className={` shadow-[1px_1px_4px_0px_rgba(0,0,0,0.2)] h-[40px] pl-[15px] bg-[#ffffff] rounded-[10px]`}
        >
          {options?.map((o) => (
            <option value={o.id} id={o.id} key={o.id}>
              {o.name}
            </option>
          ))}
        </select>
        <span className="focus"></span>
      </div>
    </div>
  );
};

export default SelectInput;
