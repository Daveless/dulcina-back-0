import React from "react";
import "./SelectInput.css";

const SelectInput = ({ label, firstOption }) => {
  return (
    <div className="flex flex-col mb-[35px]">
      <label className="text-[22px] text-[#696969]">{label}</label>
      <div className="select">
        <select
          className={` shadow-[1px_1px_4px_0px_rgba(0,0,0,0.2)] h-[40px] pl-[15px] bg-[#ffffff] rounded-[10px]`}
        >
          <option>{firstOption}</option>
          <option>{firstOption}</option>
          <option>{firstOption}</option>
        </select>
        <span className="focus"></span>
      </div>
    </div>
  );
};

export default SelectInput;
