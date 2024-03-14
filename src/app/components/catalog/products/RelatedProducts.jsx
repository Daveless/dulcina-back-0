"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import CarrouselSlider from "../../landing/CarrouselSlider";
import Product from "./Product";

const RelatedProducts = ({ categoryId }) => {
  const [relatedProducts, setRelatedProducts] = useState();
  const shownProducts = relatedProducts?.slice(0, 5);

  useEffect(() => {
    axios
      .get(
        `https://dulcina-backend.onrender.com/products/relatedProducts/${categoryId}`
      )
      .then((res) => {
        setRelatedProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, [categoryId]);

  return (
    <div className="w-[90%] mx-auto">
      <h3 className="font-bold text-2xl my-6">Productos Relacionados</h3>
      <CarrouselSlider products={shownProducts} />
    </div>
  );
};
export default RelatedProducts;
