"use client";
import { ChangeCartLength } from "@/redux/features/cart-slice";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

const CartButton = () => {
  const cartLength = useSelector((state) => state.cartReducer.value.cartLength);

  const dispatch = useDispatch();
  useEffect(() => {
    let cartLen = (JSON.parse(localStorage.getItem("cartItems")) || []).length;

    dispatch(ChangeCartLength(cartLen));
  }, []);

  return (
    <div className="hidden md:flex">
      <Link href="/cart">
        <BsCart2 size="28px" className="ml-[10px] cursor-pointer" />
        {cartLength > 0 ? (
          <span className="absolute -top-1 -right-2 text-[13px]h-[18px] w-[18px] rounded-full grid place-items-center text-white">
            {cartLength}
          </span>
        ) : null}
      </Link>
    </div>
  );
};

export default CartButton;
