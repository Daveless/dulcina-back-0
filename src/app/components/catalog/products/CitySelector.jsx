"use client";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const CitySelector = ({ cityChange, setCityChange }) => {
  const [showCityMenu, setShowCityMenu] = useState(false);
  return (
    <div>
      <div>
        <div className="border-solid border-2 border-[#d1d1d1] text-[11px] h-14 w-full mt-3 relative mb-5">
          <p className="absolute top-[-7px] left-[3px] bg-[#f8f8f8] px-1">
            Ciudad
          </p>
          <div className="flex justify-between items-center relative pt-3 pb-2 px-2">
            <p className="text-[1rem]">{cityChange}</p>
            <BsChevronDown onClick={() => setShowCityMenu(!showCityMenu)} />
            <div
              className={`${
                showCityMenu ? "flex" : "hidden"
              } absolute left-[-2px] border-solid border-2  border-[#d1d1d1] top-[2.8rem] text-[0.9rem] px-3 flex flex-col w-full bg-[#f8f8f8] gap-1`}
            >
              <p
                className="border-solid border-[#d1d1d1] text-[#797979]"
                onClick={() => {
                  setCityChange("Ibarra");
                  setShowCityMenu(false);
                }}
              >
                Ibarra
              </p>
              <p
                className="border-solid border-[#d1d1d1] text-[#797979]"
                onClick={() => {
                  setCityChange("Otavalo");
                  setShowCityMenu(false);
                }}
              >
                Otavalo
              </p>
              <p
                className="border-solid border-[#d1d1d1] text-[#797979]"
                onClick={() => {
                  setCityChange("Atuntaqui");
                  setShowCityMenu(false);
                }}
              >
                Atuntaqui
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CitySelector;
