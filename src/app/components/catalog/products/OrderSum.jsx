"use client";
import CitySelector from "./CitySelector";
import Link from "next/link";
import convertToDecimal from "@/assets/toDecimal";
import { CallButton } from "../..";
import { useDispatch } from "react-redux";
import { useState } from "react";

const OrderSum = ({ cartProducts }) => {
  const dispatch = useDispatch();
  const [cityChange, setCityChange] = useState();
  const precioTotal = cartProducts?.reduce(
    (total, producto) => total + producto.price,
    0
  );
  let shippingValue = 0;
  switch (cityChange) {
    case "Ibarra":
      shippingValue = 2;
      break;
    case "Otavalo":
      shippingValue = 4;
      break;
    case "Atuntaqui":
      shippingValue = 3;
      break;
  }
  const onBuy = () => {
    cartProducts.map((p) => {
      dispatch(patchTimesSoldProduct(p.id));
    });
    localStorage.setItem("cartItems", JSON.stringify([]));
    dispatch(ChangeCartLength(0));
  };

  return (
    <div className="w-full sm:bg-white  md:p-4 max-w-[380px] m-auto">
      <h3 className="hidden md:flex font-bold text-lg">Resumen de la Orden</h3>
      <div className="flex justify-between text-[#797979] text-sm my-2">
        <p>Subtotal</p>{" "}
        <p>${cartProducts ? convertToDecimal(precioTotal) : "0.00"}</p>
      </div>
      <div className="flex justify-between text-[#797979] text-sm my-2">
        <p>Estimación de envio</p> <p>${shippingValue + ".00"}</p>
      </div>

      <CitySelector cityChange={cityChange} setCityChange={setCityChange} />
      <div className="flex justify-between text-bold mb-4">
        <p>Total estimado</p>
        <p>${convertToDecimal(precioTotal + shippingValue * 100)}</p>
      </div>
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
        <CallButton onClick={onBuy} content={"Continuar Compra"} />
      </Link>
    </div>
  );
};
export default OrderSum;
