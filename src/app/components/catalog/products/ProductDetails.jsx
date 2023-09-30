"use client";
import { useDispatch } from "react-redux";
import { ButtonContainer, CallButton, StockButtons } from "../..";
import { ChangeCartLength } from "@/redux/features/cart-slice";
import toast, { Toaster } from "react-hot-toast";
import { BsFillCartCheckFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import RelatedProducts from "./RelatedProducts";
import { BsArrowLeftCircle, BsShare, BsChevronDown } from "react-icons/bs";

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
    toast.custom(
      <div className=" flex font-medium justify-evenly bg-[#272727]/75 text-[15px] items-center h-[45px] text-[#ffffff] w-[190px] rounded-full">
        <BsFillCartCheckFill size="20px" />
        <p>Producto añadido</p>
      </div>,
      { position: "bottom-left" }
    );
  };
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

  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  return (
    <div>
      <div className="sm:min-h-0">
        <div className="flex flex-col text-[#222222] bg-white">
          {/*
          <div className="w-[90%] mx-auto flex my-3 justify-between">
            <BsArrowLeftCircle size={25} />
            <BsShare size={25} />
          </div>
          */}
          <div className="sm:grid sm:grid-cols-2 sm:shadow-[1px_1px_19px_1px_rgba(0,0,0,0.10)]">
            <div className="flex w-full min-h-[340px] sm:h-full mb-3 relative ">
              <Image
                src={product?.imageUrl}
                fill
                objectFit="contain"
                alt="product description"
              ></Image>
            </div>
            <div className="w-[100%] px-[20px] flex rounded-2xl bg-[#F2F2F2] flex-col justify-between sm:shadow-[none] shadow-[0_-1px_10px_1px_rgba(0,0,0,0.15)] pt-5">
              <div className="w-[100%] mx-auto max-w-[280px] sm:max-w-[400px]">
                <div>
                  <h1 className="text-[25px] font-black leading-tight">
                    {product?.name.charAt(0).toUpperCase() +
                      product?.name.slice(1)}
                  </h1>
                  <h3 className="text-[20px] weigh font-bold">
                    ${convertToDecimal(product?.price)}
                  </h3>
                  <div>{/* icons */}</div>
                </div>
                <p className="text-12px font-[300] text-[#222]">
                  {description}
                </p>

                {/* stock buttons
            <div className="flex justify-between">
              <StockButtons />
            </div>
            */}

                <div className="border-solid border-2 border-[#CACACA] w-28 mt-5 relative mb-5">
                  <p className="absolute top-[-13px] left-[3px] bg-[#F2F2F2] px-2">
                    Cantidad
                  </p>
                  <div className="flex justify-between items-center py-2 px-2">
                    <p>1</p>
                    <BsChevronDown />
                  </div>
                </div>

                <CallButton
                  onClick={handleAddToCart}
                  content={"Añadir al carrito"}
                />
                <Toaster />
              </div>
            </div>
          </div>
          {Product && <RelatedProducts categoryId={product.categoryId} />}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
