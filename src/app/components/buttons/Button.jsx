import React from "react";

const Button = ({ content }) => {
  return (
    <button type="button" className="h-[50px] text-[#565656] mr-[10px] mb-[10px] border-2 border-[#D9D9D9] pl-[15px] pr-[15px] rounded-3xl">
      {content}
    </button>
  );
};

export default Button;
