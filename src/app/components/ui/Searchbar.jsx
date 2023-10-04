import React from "react";
import { HiOutlineSearch } from "react-icons/hi";

const Searchbar = () => {
  return (
    <div className="flex pl-[20px] text-[#222222] pr-[20px] bg-[#f2f2f2] h-[35px] items-center justify-between rounded-3xl">
      <input
        className="bg-[#f2f2f2] focus:outline-none"
        placeholder={`Buscar...`}
      />
      <button className="text-[#222222]">
        <HiOutlineSearch />
      </button>
    </div>
  );
};

export default Searchbar;
