"use client";
import React, { useState } from "react";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
const InfoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      caption: "Entrega en casa",
      desc: "Comodidad en cada pedido",
    },
    {
      caption: "Seguridad",
      desc: "Compra 100% segura",
    },
    {
      caption: "Lo mejor para ti",
      desc: "Productos y servicios excepcionales",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="relative grid grid-cols-[10%_80%_10%] grid-rows-[45%_10%_30%_15%] mt-5 mb-24">
      <div className="w-full z-30 h-[320px] bg-[#222] text-white col-start-1 col-end-4 row-start-1 row-end-5 flex flex-col justify-center items-center">
        <div className="w-full md:flex gap-5 justify-between items-center hidden md:w-[80%] m-auto">
          <div className="items-center relative justify-center mx-auto w-full h-full text-center flex flex-col">
            <div className=" h-full justify-center place-items-end items-center flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="115"
                height="115"
                viewBox="0 0 136 140"
                fill="none"
                className="h-full justify-self-end align-bottom"
              >
                <g clipPath="url(#clip0_601_112)">
                  <path
                    d="M31.25 106.25C31.25 109.565 32.567 112.745 34.9112 115.089C37.2554 117.433 40.4348 118.75 43.75 118.75C47.0652 118.75 50.2446 117.433 52.5888 115.089C54.933 112.745 56.25 109.565 56.25 106.25C56.25 102.935 54.933 99.7554 52.5888 97.4112C50.2446 95.067 47.0652 93.75 43.75 93.75C40.4348 93.75 37.2554 95.067 34.9112 97.4112C32.567 99.7554 31.25 102.935 31.25 106.25Z"
                    stroke="white"
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M93.75 106.25C93.75 109.565 95.067 112.745 97.4112 115.089C99.7554 117.433 102.935 118.75 106.25 118.75C109.565 118.75 112.745 117.433 115.089 115.089C117.433 112.745 118.75 109.565 118.75 106.25C118.75 102.935 117.433 99.7554 115.089 97.4112C112.745 95.067 109.565 93.75 106.25 93.75C102.935 93.75 99.7554 95.067 97.4112 97.4112C95.067 99.7554 93.75 102.935 93.75 106.25Z"
                    stroke="white"
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M31.25 106.25H18.75V81.25M12.5 31.25H81.25V106.25M56.25 106.25H93.75M118.75 106.25H131.25V68.75M131.25 68.75H81.25M131.25 68.75L112.5 37.5H81.25"
                    stroke="white"
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.75 56.25H43.75"
                    stroke="white"
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_601_112">
                    <rect width="150" height="150" fill="white" />
                  </clipPath>
                </defs>
              </svg>{" "}
            </div>
            <p className="w-full text-[30px] font-bold">{images[0].caption}</p>
            <p className="w-full text-[16px] font-normal mt-2 ">
              {images[0].desc}
            </p>
          </div>
          <div className="items-center relative justify-center mx-auto w-full h-full text-center flex flex-col">
            <div className=" h-full justify-center place-items-end items-center flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="5"
                viewBox="0 0 158 150"
                fill="none"
                className="h-full align-bottom"
              >
                <path
                  d="M32.7969 81.25C32.7969 77.9348 34.179 74.7554 36.6393 72.4112C39.0995 70.067 42.4364 68.75 45.9157 68.75H111.51C114.989 68.75 118.326 70.067 120.786 72.4112C123.246 74.7554 124.629 77.9348 124.629 81.25V118.75C124.629 122.065 123.246 125.245 120.786 127.589C118.326 129.933 114.989 131.25 111.51 131.25H45.9157C42.4364 131.25 39.0995 129.933 36.6393 127.589C34.179 125.245 32.7969 122.065 32.7969 118.75V81.25Z"
                  fill="white"
                />
                <path
                  d="M52.4751 68.75V43.75C52.4751 37.1196 55.2394 30.7607 60.1599 26.0723C65.0804 21.3839 71.7541 18.75 78.7127 18.75C85.6714 18.75 92.345 21.3839 97.2655 26.0723C102.186 30.7607 104.95 37.1196 104.95 43.75V68.75"
                  stroke="white"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="w-full text-[30px] font-bold">{images[1].caption}</p>
            <p className="w-full text-[16px] font-normal mt-2">
              {images[1].desc}
            </p>
          </div>
          <div className="items-center relative justify-center mx-auto w-full h-full text-center flex flex-col">
            <div className=" h-full justify-center place-items-end items-center flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="50"
                viewBox="0 0 120 100"
                fill="none"
                className="h-full justify-self-end align-bottom"
              >
                <g clipPath="url(#clip0_602_127)">
                  <path
                    d="M60.0002 88.7498L29.1402 104.975L35.0352 70.6098L10.0352 46.2748L44.5352 41.2748L59.9652 10.0098L75.3952 41.2748L109.895 46.2748L84.8952 70.6098L90.7902 104.975L60.0002 88.7498Z"
                    stroke="white"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_602_127">
                    <rect width="120" height="120" fill="white" />
                  </clipPath>
                </defs>
              </svg>{" "}
            </div>
            <p className="w-full text-[30px] font-bold">{images[2].caption}</p>
            <p className="w-full text-[16px] font-normal mt-2">
              {images[2].desc}
            </p>
          </div>
        </div>
        <div className="h-[60%] m-auto px-5 text-center grid grid-rows-[60%_15%_30%] justify-center items-center justify-items-center md:hidden">
          {currentIndex === 0 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="110"
              height="150"
              viewBox="0 0 136 105"
              fill="none"
            >
              <g clipPath="url(#clip0_601_112)">
                <path
                  d="M31.25 106.25C31.25 109.565 32.567 112.745 34.9112 115.089C37.2554 117.433 40.4348 118.75 43.75 118.75C47.0652 118.75 50.2446 117.433 52.5888 115.089C54.933 112.745 56.25 109.565 56.25 106.25C56.25 102.935 54.933 99.7554 52.5888 97.4112C50.2446 95.067 47.0652 93.75 43.75 93.75C40.4348 93.75 37.2554 95.067 34.9112 97.4112C32.567 99.7554 31.25 102.935 31.25 106.25Z"
                  stroke="white"
                  strokeWidth="9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M93.75 106.25C93.75 109.565 95.067 112.745 97.4112 115.089C99.7554 117.433 102.935 118.75 106.25 118.75C109.565 118.75 112.745 117.433 115.089 115.089C117.433 112.745 118.75 109.565 118.75 106.25C118.75 102.935 117.433 99.7554 115.089 97.4112C112.745 95.067 109.565 93.75 106.25 93.75C102.935 93.75 99.7554 95.067 97.4112 97.4112C95.067 99.7554 93.75 102.935 93.75 106.25Z"
                  stroke="white"
                  strokeWidth="9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31.25 106.25H18.75V81.25M12.5 31.25H81.25V106.25M56.25 106.25H93.75M118.75 106.25H131.25V68.75M131.25 68.75H81.25M131.25 68.75L112.5 37.5H81.25"
                  stroke="white"
                  strokeWidth="9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.75 56.25H43.75"
                  stroke="white"
                  strokeWidth="9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_601_112">
                  <rect width="150" height="150" fill="white" />
                </clipPath>
              </defs>
            </svg>
          )}
          {currentIndex === 1 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="120"
              viewBox="0 0 158 150"
              fill="none"
            >
              <path
                d="M32.7969 81.25C32.7969 77.9348 34.179 74.7554 36.6393 72.4112C39.0995 70.067 42.4364 68.75 45.9157 68.75H111.51C114.989 68.75 118.326 70.067 120.786 72.4112C123.246 74.7554 124.629 77.9348 124.629 81.25V118.75C124.629 122.065 123.246 125.245 120.786 127.589C118.326 129.933 114.989 131.25 111.51 131.25H45.9157C42.4364 131.25 39.0995 129.933 36.6393 127.589C34.179 125.245 32.7969 122.065 32.7969 118.75V81.25Z"
                fill="white"
              />
              <path
                d="M52.4751 68.75V43.75C52.4751 37.1196 55.2394 30.7607 60.1599 26.0723C65.0804 21.3839 71.7541 18.75 78.7127 18.75C85.6714 18.75 92.345 21.3839 97.2655 26.0723C102.186 30.7607 104.95 37.1196 104.95 43.75V68.75"
                stroke="white"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          {currentIndex === 2 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="90"
              height="90"
              viewBox="0 0 120 120"
              fill="none"
            >
              <g clipPath="url(#clip0_602_127)">
                <path
                  d="M60.0002 88.7498L29.1402 104.975L35.0352 70.6098L10.0352 46.2748L44.5352 41.2748L59.9652 10.0098L75.3952 41.2748L109.895 46.2748L84.8952 70.6098L90.7902 104.975L60.0002 88.7498Z"
                  stroke="white"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_602_127">
                  <rect width="120" height="120" fill="white" />
                </clipPath>
              </defs>
            </svg>
          )}
          <p className="w-full text-4xl">{images[currentIndex].caption}</p>
          <p className="w-full text-lg ">{images[currentIndex].desc}</p>
        </div>
      </div>

      <div className="col-start-1 col-end-4 row-start-4 row-end-5 z-50 text-white flex justify-center items-start gap-3 md:hidden">
        <div className="flex items-center justify-center">
          {currentIndex == 0 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="none"
            >
              <circle cx="5" cy="5" r="5" fill="white" className="mx-auto" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="none"
              className="m-auto flex justify-center items-center"
            >
              <circle cx="5" cy="5" r="5" stroke="white" className="m-auto" />
            </svg>
          )}
        </div>
        <div className="flex items-center justify-center">
          {currentIndex == 1 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="none"
            >
              <circle cx="5" cy="5" r="5" fill="white" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="none"
            >
              <circle cx="5" cy="5" r="5" stroke="white" />
            </svg>
          )}
        </div>
        <div className="flex items-center justify-center">
          {currentIndex == 2 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="none"
            >
              <circle cx="5" cy="5" r="5" fill="white" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="none"
            >
              <circle cx="5" cy="5" r="5" stroke="white" />
            </svg>
          )}
        </div>
      </div>

      <BsChevronCompactRight
        color="#474747"
        size={40}
        className="flex w-full h-full z-50 col-start-3 col-end-4 row-start-2 row-end-3  items-center justify-center md:hidden"
        onClick={nextSlide}
      />

      <BsChevronCompactLeft
        color="#474747"
        size={40}
        className="flex w-full h-full z-50 col-start-1 col-end-2 row-start-2 row-end-3  items-center justify-center md:hidden"
        onClick={prevSlide}
      />
    </div>
  );
};

export default InfoSlider;
