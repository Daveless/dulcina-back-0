"use client";
import { useEffect, useState } from "react";
import CartProduct from "./CartProduct";

const CartProductsContainer = () => {
  const [CartProducts, setCartProducts] = useState();
  useEffect(() => {
    setCartProducts(JSON.parse(localStorage.getItem("cartItems")) || []);
  }, []);
  return (
    <div className="w-full max-w-[380px]">
      {CartProducts?.length
        ? CartProducts?.map((p) => {
            return (
              <CartProduct
                key={p.id}
                setCartProducts={setCartProducts}
                id={p.id}
                name={p.name}
                price={p.price}
                description={p.description}
                imageUrl={p.imageUrl}
              />
            );
          })
        : null}
    </div>
  );
};

export default CartProductsContainer;
