import React from "react";

const FormInput = ({ label, type, placeholder, className, input, onChange, inputName }) => {
  
  
  return (
    <div className="flex flex-col mb-[35px]">
      <label className="text-[22px] text-[#696969]">{label}</label>
      <input
        className={`${className} shadow-[1px_1px_4px_0px_rgba(0,0,0,0.2)] pl-[15px] h-[40px] rounded-[10px]`}
        type={type}
        placeholder={placeholder}
        onChange={(e)=>onChange(e,inputName)}
        value={input?.[inputName]}
      ></input>
    </div>
  );
};

export default FormInput;
