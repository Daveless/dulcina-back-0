"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { CartButton, Searchbar } from ".";

const Navbar = () => {
  const [isShown, setIsShown] = useState(false);
  const toggleMenu = () => {
    setIsShown(!isShown);
  };
  return (
    <div className="md:flex grid grid-cols-2 px-4 md:grid-cols-[20%_80%] w-full md:h-[70px] justify-center content-center z-40 bg-[#ffffff]">
      <Link className="flex items-center" href="/">
        <h1 className="text-bold text-center text-3xl font-lobster">Dulcina</h1>
      </Link>
      <div className="flex flex-row justify-end gap-5 items-center md:hidden md:mb-0 mb-2">
        <Link href="/cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className="w-[1.5rem]"
          >
            <g clipPath="url(#clip0_778_212)">
              <path
                d="M6.15234 30.0769C6.15234 30.893 6.47652 31.6756 7.05355 32.2526C7.63059 32.8297 8.41322 33.1538 9.22927 33.1538C10.0453 33.1538 10.8279 32.8297 11.405 32.2526C11.982 31.6756 12.3062 30.893 12.3062 30.0769C12.3062 29.2609 11.982 28.4782 11.405 27.9012C10.8279 27.3242 10.0453 27 9.22927 27C8.41322 27 7.63059 27.3242 7.05355 27.9012C6.47652 28.4782 6.15234 29.2609 6.15234 30.0769Z"
                stroke="#222222"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M23.0762 30.0769C23.0762 30.893 23.4003 31.6756 23.9774 32.2526C24.5544 32.8297 25.337 33.1538 26.1531 33.1538C26.9691 33.1538 27.7518 32.8297 28.3288 32.2526C28.9058 31.6756 29.23 30.893 29.23 30.0769C29.23 29.2609 28.9058 28.4782 28.3288 27.9012C27.7518 27.3242 26.9691 27 26.1531 27C25.337 27 24.5544 27.3242 23.9774 27.9012C23.4003 28.4782 23.0762 29.2609 23.0762 30.0769Z"
                stroke="#222222"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M26.1523 27H9.22927V5.46155H6.15234"
                stroke="#222222"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.23047 8.53845L30.7689 10.0769L29.2305 20.8461H9.23047"
                stroke="#222222"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_778_212">
                <rect
                  width="36.9231"
                  height="36.9231"
                  fill="white"
                  transform="translate(0 0.84613)"
                />
              </clipPath>
            </defs>
          </svg>
        </Link>
        <button onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            className="w-[1.9rem] pt-[5px]"
          >
            <g clipPath="url(#clip0_778_206)">
              <path
                d="M7.0752 10.0769H31.6906"
                stroke="#222222"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.0752 19.3077H31.6906"
                stroke="#222222"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.0752 28.5385H31.6906"
                stroke="#222222"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_778_206">
                <rect
                  width="30"
                  height="30"
                  fill="white"
                  transform="translate(0.922852 0.84613)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <div
        className={`md:relative col-start-1 col-end-3 row-start-2 md:justify-end pb-4 md:pb-0  m-auto px-4 md:flex md:gap-5 items-center bg-white  md:bg-inherit w-full text-center text-black  z-30 md:z-60 ${
          isShown ? "flex flex-col md:flex" : "hidden md:flex "
        }`}
      >
        <Link className="my-4 mx-2 md:my-0" href="/products">
          Catalogo
        </Link>
        <Link
          className="my-4 mx-2 md:my-0"
          href="https://api.whatsapp.com/send?phone=593978778213"
        >
          Contacto
        </Link>

        <Searchbar />

        <CartButton />
      </div>
    </div>
  );
};

export default Navbar;
