"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isShown, setIsShown] = useState(false);
  const toggleMenu = () => {
    setIsShown(!isShown);
  };
  return (
    <header className="grid grid-cols-2 p-3 z-40">
      <Link href="/">
        <h1 className="text-bold text-xl">Dulcina</h1>
      </Link>
      <div className="flex flex-row justify-around">
        <button>S</button>
        <button>C</button>
        <button onClick={toggleMenu}>hamb</button>
      </div>
      <div
        className={`absolute top-[50px] bg-gray-500 w-full left-0 text-center text-black p-5 z-30 ${
          isShown ? "flex flex-col" : "hidden"
        }`}
      >
        <Link href="/">Inicio</Link>
        <Link href="/products">Tienda</Link>
        <Link href="/login">Iniciar Sesión</Link>
        <Link href="/register">Registrarse</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </header>
  );
};
export default Header;
