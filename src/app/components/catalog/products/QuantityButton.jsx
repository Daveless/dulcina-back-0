"use client";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
const QuantityButton = () => {
  const [quantityChange, setQuantityChange] = useState(1);
  const [showQuantityMenu, setShowQuantityMenu] = useState(false);
  return (
    <div>
      <div className="border-solid border-2 border-[#d1d1d1] text-[11px] w-full relative mb-5">
        <p className="absolute font-bold top-[-13px] left-[3px] bg-[#f8f8f8] px-2">
          Cantidad
        </p>
        <div className="flex justify-between items-center relative py-1 px-2">
          <p>{quantityChange}</p>
          <BsChevronDown
            onClick={() => setShowQuantityMenu(!showQuantityMenu)}
          />
          <div
            className={`${
              showQuantityMenu ? "flex" : "hidden"
            } absolute left-[-2px] border-solid border-2 border-[#d1d1d1] top-[1.5rem] px-3 flex flex-col w-full bg-[#f8f8f8] gap-1`}
          >
            <p
              className="border-solid border-[#d1d1d1]"
              onClick={() => {
                setQuantityChange(1);
                setShowQuantityMenu(false);
              }}
            >
              1
            </p>
            <p
              className="border-solid border-[#d1d1d1]"
              onClick={() => {
                setQuantityChange(2);
                setShowQuantityMenu(false);
              }}
            >
              2
            </p>
            <p
              className="border-solid border-[#d1d1d1]"
              onClick={() => {
                setQuantityChange(3);
                setShowQuantityMenu(false);
              }}
            >
              3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuantityButton;
