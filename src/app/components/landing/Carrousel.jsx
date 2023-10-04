"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import CarrouselSlider from "./CarrouselSlider";

const Carrousel = () => {
  const [bestProducts, setBestProducts] = useState();
  console.log(bestProducts);
  useEffect(() => {
    axios
      .get("https://dulcina-backend.onrender.com/bestProduct")
      .then((res) => setBestProducts(res.data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h3 className="w-[90%] mx-auto text-2xl font-bold py-5 mt-2">
        Productos Populares
      </h3>
      <div className="ml-4">
        <CarrouselSlider products={bestProducts} />
      </div>
    </div>
  );
};
export default Carrousel;
