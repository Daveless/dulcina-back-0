"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import CarrouselSlider from "./CarrouselSlider";

const Carrousel = () => {
  const [bestProducts, setBestProducts] = useState();

  useEffect(() => {
    axios
      .get("https://dulcina-backend.onrender.com/bestProduct")
      .then((res) => setBestProducts(res.data.results.splice(0, 4)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className=" my-20">
      <h3 className="w-[90%] mx-auto text-3xl font-bold py-2 ">
        Productos Populares
      </h3>
      <div className="ml-4">
        <CarrouselSlider products={bestProducts} />
      </div>
    </div>
  );
};
export default Carrousel;
