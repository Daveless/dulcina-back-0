"use client";

import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { useEffect } from "react";
import { fetchProducts } from "@/redux/features/product-slice";

const ListProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state) => state.productsReducer.allProducts.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log(products);
  if (products?.length)
    return (
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] max-w-[950px]  w-[100%] justify-center ">
          {products?.map((p) => (
            <Product
              key={p.id}
              id={p.id}
              name={p.name}
              image={p.imageUrl}
              price={p.price}
            />
          ))}
        </div>
    );
};

export default ListProducts;
