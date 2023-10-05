"use client";
import Link from "next/link";
import { CartProductsContainer, Layout } from "../components";
import { useEffect, useState } from "react";
import convertToDecimal from "@/assets/toDecimal";
import { useDispatch } from "react-redux";
import { patchTimesSoldProduct } from "@/redux/features/product-slice";
import { ChangeCartLength } from "@/redux/features/cart-slice";

const CartPage = () => {
  const [cartProducts, setCartProducts] = useState();
  const dispatch = useDispatch()

  useEffect(() => {
    setCartProducts(JSON.parse(localStorage.getItem("cartItems")) || []);
  }, []);
  const onBuy = () => {
    cartProducts.map(p=>{
      dispatch(patchTimesSoldProduct(p.id))
    })
    localStorage.setItem("cartItems", JSON.stringify([]))
    dispatch(ChangeCartLength(0))
  };
  const precioTotal = cartProducts?.reduce(
    (total, producto) => total + producto.price,
    0
  );
  return (
    <Layout title={"Dulcina"}>
      <div className="min-h-screen">
        <CartProductsContainer />
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=593978778213&text=Quisiera%20comprar:${cartProducts?.map(
            (e) => {
              return `%20${e.name}`;
            }
          )}%0APrecio%20estimado:%20$${convertToDecimal(precioTotal)}
`}
        >
          <button onClick={onBuy}>comprar</button>
        </Link>
      </div>
    </Layout>
  );
};

export default CartPage;
