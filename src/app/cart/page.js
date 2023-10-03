"use client"
import Link from "next/link";
import { CartProductsContainer, Layout } from "../components";
import { useEffect, useState } from "react";

const CartPage = () => {
  const [cartProducts, setCartProducts] = useState();
  const convertToDecimal = (num) => {
    let convertedNumber = 0;
    if (num?.toString().length == 3) {
      convertedNumber = String(num)[0] + "." + String(num)[1] + String(num)[2];
    } else {
      convertedNumber =
        String(num)[0] + String(num)[1] + "." + String(num)[2] + String(num)[3];
    }
    return convertedNumber;
  };
  useEffect(() => {
    setCartProducts(JSON.parse(localStorage.getItem("cartItems")) || []);
  }, []);
  const onBuy = () =>{
    cartProducts.map
  }
  const precioTotal = cartProducts?.reduce((total, producto) => total + producto.price, 0)
  return (
    <Layout title={"Dulcina"}>
      <div className="min-h-screen">
        <CartProductsContainer />
        <Link rel="noopener noreferrer" target="_blank" href={`https://api.whatsapp.com/send?phone=593978778213&text=Quisiera%20comprar:${cartProducts?.map(e=>{return `%20${e.name}`})}%0APrecio%20estimado:%20${convertToDecimal(precioTotal)}
`}>
          <button>comprar</button>
        </Link>
      </div>
    </Layout>
  );
};

export default CartPage;
