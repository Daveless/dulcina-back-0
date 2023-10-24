"use client";
import { useDispatch, useSelector } from "react-redux";
import { CallButton } from "../..";
import { ChangeCartLength } from "@/redux/features/cart-slice";
import toast, { Toaster } from "react-hot-toast";
import { BsFillCartCheckFill } from "react-icons/bs";
import Image from "next/image";
import { useEffect } from "react";
import { fetchProduct } from "@/redux/features/product-slice";
import RelatedProducts from "./RelatedProducts";
import convertToDecimal from "@/assets/toDecimal";
import QuantityButton from "./QuantityButton";

const ProductDetails = ({ id }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productsReducer.product);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, []);
  const handleAddToCart = () => {
    // Obtener los datos del producto seleccionado
    const localProduct = {
      id: product?.id,
      name: product?.name,
      price: product?.price,
      description: product?.description,
      quantity: 1,
      times_sold: product?.times_sold,
      //options: product.options,
      imageUrl: product?.imageUrl,
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

  const productName =
    product?.name?.charAt(0).toUpperCase() + product?.name?.slice(1);
  return (
    <div>
      <div className="sm:min-h-0">
        <div className="flex flex-col text-[#222222]  bg-[#f2f2f2]">
          <div className="sm:grid sm:grid-cols-2 sm:h-[695px] sm:shadow-[1px_1px_19px_1px_rgba(0,0,0,0.10)]">
            <div className="flex w-full min-h-[340px] sm:h-full mb-3 relative ">
              {product?.imageUrl ? (
                <Image
                  src={product?.imageUrl}
                  fill
                  objectFit="contain"
                  alt="product description"
                  sizes="100vw"
                ></Image>
              ) : null}
            </div>
            <div className=" w-[100%] sm:h-[100%] px-[20px] flex rounded-2xl sm:rounded-none bg-[#F8F8F8] flex-col justify-center sm:shadow-[none] shadow-[0_-1px_10px_1px_rgba(0,0,0,0.15)] pt-5">
              <div className="sm:flex sm:flex-col  sm:h-[80%] sm:items-center  w-[100%] mx-auto max-w-[280px] sm:max-w-[400px]">
                {productName !== NaN ? (
                  <div className=" w-[100%] mx-auto max-w-[280px] sm:max-w-[400px] sm:min-h-[60%] sm:flex sm:flex-col sm:justify-between">
                    <div>
                      <h1 className="text-[30px] font-black leading-tight">
                        {productName}
                      </h1>
                      <h3 className="text-[20px] weigh font-bold">
                        ${convertToDecimal(product?.price)}
                      </h3>
                      <div>{/* icons */}</div>
                    </div>

                    <p className="text-12px font-[300] text-[#222]">
                      {product.description}

                    </p>

                    <div className="w-24">
                      <QuantityButton />
                    </div>

                    <CallButton
                      onClick={handleAddToCart}
                      content={"Añadir al carrito"}
                    />
                    <Toaster />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          {product && <RelatedProducts categoryId={product.categoryId} />}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
