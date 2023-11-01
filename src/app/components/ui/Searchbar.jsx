"use client";
import { changeSearchInput } from "@/redux/features/search-slice";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useDispatch } from "react-redux";

const Searchbar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const rout = useRouter();

  const onChange = (e) => {
    setInput(e.target.value);
  };
  const onSearch = (e) => {
    e.preventDefault();
    dispatch(changeSearchInput(input));
    redirect("/products");

    setInput("");
  };
  return (
    <>
      <form onSubmit={onSearch}>
        <div className="flex pl-[20px] text-[#222222] pr-[20px] bg-[#f2f2f2] h-[35px] items-center justify-between rounded-3xl">
          <input
            className="bg-[#f2f2f2] focus:outline-none"
            placeholder={`Buscar...`}
            value={input}
            onChange={onChange}
          />
          <button type="submit" className="text-[#222222]">
            <HiOutlineSearch />
          </button>
        </div>
      </form>
    </>
  );
};

export default Searchbar;
