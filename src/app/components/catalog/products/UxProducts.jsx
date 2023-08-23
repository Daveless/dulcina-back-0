"use client";
import { useSelector } from "react-redux";
import { SortContainer } from "../sort";

const UxProducts = () => {
  const products = useSelector(
    (state) => state.productsReducer.allProducts.products
  );
  return (
    <div className="flex justify-between mb-[20px]">
      <div>
        <p className="text-[17px] font-normal hidden md:flex">
          Catalogo {">"} Arreglos {">"} Navidad{" "}
        </p>
      </div>
      <div className="flex w-[950px] justify-between pr-[70px] text-[#535353]">
        <div>
          <p>{products?.length} resultados</p>
        </div>
        <div className="hidden md:flex">
          <SortContainer />
        </div>
      </div>
    </div>
  );
};

export default UxProducts;
