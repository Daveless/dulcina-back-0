"use client";
import Link from "next/link";
import { CartProductsContainer, Layout } from "../components";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { patchTimesSoldProduct } from "@/redux/features/product-slice";
import { ChangeCartLength } from "@/redux/features/cart-slice";
import OrderSum from "../components/catalog/products/OrderSum";

const CartPage = () => {
  const [cartProducts, setCartProducts] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setCartProducts(JSON.parse(localStorage.getItem("cartItems")) || []);
  }, []);

  return (
    <Layout title={"Dulcina"}>
      <div className="w-[90%] mx-auto flex flex-col justify-center items-center">
        <h2 className="flex text-center text-3xl my-3 font-bold justify-center items-center gap-2">
          <p className="hidden">icon</p>Carrito
        </h2>
        <div className="w-full flex flex-col justify-center items-center md:flex-row md:gap-7  max-w-[1000px] md:justify-between md:items-start">
          <CartProductsContainer />
          <div className="w-full">
            <OrderSum cartProducts={cartProducts} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
