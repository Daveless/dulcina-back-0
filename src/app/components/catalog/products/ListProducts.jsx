"use client";

import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { useEffect } from "react";
import { fetchProducts } from "@/redux/features/product-slice";
import { ProductSqueleton } from "../../ui/Squeletons";

const ListProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state) => state.productsReducer.allProducts.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log(products);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 items-stretch content-center w-full m-auto justify-center">
      {products
        ? products?.map((p) => (
            <Product
              key={p.id}
              id={p.id}
              name={p.name}
              image={p.imageUrl}
              price={p.price}
            />
          ))
        : [1, 2, 3, 4, 5, 6].map((p) => <ProductSqueleton key={p} />)}
    </div>
  );
};

export default ListProducts;
