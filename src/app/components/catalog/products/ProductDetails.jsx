"use client";
import { useDispatch } from "react-redux";
import { ButtonContainer, CallButton, StockButtons } from "../..";
import { ChangeCartLength } from "@/redux/features/cart-slice";
import toast, { Toaster } from "react-hot-toast";
import { BsFillCartCheckFill } from "react-icons/bs";
import Link from "next/link";

const ProductDetails = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    // Obtener los datos del producto seleccionado
    const localProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      quantity: 1,
      options: product.options,
    };

    // Obtener el carrito actual desde el localStorage
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Verificar si el producto ya está en el carrito
    const existingProductIndex = cart.findIndex(
      (item) => item.id === localProduct.id
    );

    if (existingProductIndex >= 0) {
      // Si el producto ya está en el carrito, aumentar la cantidad
      cart[existingProductIndex].quantity += 1;
    } else {
      // Si el producto no está en el carrito, agregarlo
      cart.push(localProduct);
    }

    // Actualizar el carrito en el localStorage
    localStorage.setItem("cartItems", JSON.stringify(cart));
    dispatch(ChangeCartLength(cart.length));

    // Actualizar el estado del número de productos en el carrito
    toast.custom((
      <div className=" flex font-medium justify-evenly bg-[#272727]/75 text-[15px] items-center h-[45px] text-[#ffffff] w-[190px] rounded-full">
          <BsFillCartCheckFill size="20px" />
          <p>Producto añadido</p>
      </div>),{position:"bottom-left"} 
    )
  };
  return (
    <div>
      <div className="min-h-screen">
        <div className="flex text-[#222222] h-[580px]  ">
          <div className="flex w-[50%] h-[100%] justify-center">
            <img src="https://dulcina.org/imgs/producto9.png" />
          </div>
          <div className="w-[50%] h-[100%] pr-[110px] pl-[100px] flex  flex-col justify-between">
            <div>
              <h1 className="text-[33px] font-black leading-tight">
                {product.name}
              </h1>
              <div>{/* icons */}</div>
            </div>
            <p>{product.description}</p>
            <div>
              <h3 className="text-[25px] font-bold">Paleta</h3>
              <ButtonContainer listOfButtons={product.options} />
            </div>
            {/* stock buttons */}
            <div className="flex justify-between">
              <h3 className="text-[40px] font-medium">${product.price}</h3>
              <StockButtons />
            </div>

            <CallButton onClick={handleAddToCart} />
            <Toaster />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
