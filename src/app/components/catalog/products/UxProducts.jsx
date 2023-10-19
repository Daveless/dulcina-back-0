"use client";
import { useSelector } from "react-redux";
import { SortContainer } from "../sort";
import { capitalize } from "@/assets";

const UxProducts = () => {
  const products = useSelector(
    (state) => state.productsReducer?.allProducts?.products
  );
  const categoryInputName = useSelector(
    (state) => state.filterReducer.value.byCategory.name
  );
  const searchInput = useSelector((state) => state.searchReducer.searchInput);

  return (
    <div className="">
      <div className="flex justify-between mb-[20px]">
        <div className="w-[400px] flex justify-start pl-[88px]">
          <p className="text-[17px] font-normal hidden md:flex">
            Dulcina {">"} Catalogo {categoryInputName?.length ? `> ${capitalize(categoryInputName)}`: null} 
          </p>
        </div>
        <div className="flex w-[950px] justify-between pr-[70px] text-[#535353]">
          <div>
            {searchInput?.length ? <p>Resultados de &quot{capitalize(searchInput)}&quot</p> : null}
          </div>
          <div className="hidden md:flex">
            <SortContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UxProducts;
