"use client";
import { useEffect, useState } from "react";
import CartProduct from "./CartProduct";
import toggleSlashAsterisco from "@/assets/toggleSlashAsterisco";

const CartProductsContainer = () => {
  const [CartProducts, setCartProducts] = useState();
  useEffect(() => {
    setCartProducts(JSON.parse(localStorage.getItem("cartItems")) || []);
  }, []);
  return (
    <div className="w-full max-w-[380px]">
      {CartProducts?.length ? (
        CartProducts.map((p) => {
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
      ) : (
        <div className="w-full h-10 text-[#797979] flex justify-center align-middle items-center text-lg">
          <span>No tienes productos agregados aún</span>
        </div>
      )}
    </div>
  );
};

export default CartProductsContainer;
