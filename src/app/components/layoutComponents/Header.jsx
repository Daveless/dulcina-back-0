"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isShown, setIsShown] = useState(false);
  const toggleMenu = () => {
    setIsShown(!isShown);
  };
  return (
    <header className="grid grid-cols-2 md:grid-cols-[30%_70%] md:px-10 p-3 z-40">
      <Link className="flex items-center" href="/">
        <h1 className="text-bold text-xl">Dulcina</h1>
      </Link>
      <div className="flex flex-row justify-around md:hidden">
        <button>
          <i className="bx bx-search text-2xl"></i>
        </button>
        <button>
          <i className="bx bx-cart text-2xl"></i>
        </button>
        <button onClick={toggleMenu}>
          <i className="bx bx-menu text-2xl"></i>
        </button>
      </div>
      <div
        className={`absolute md:relative md:flex top-[50px] md:top-0 md:justify-around items-center bg-gray-200 md:bg-inherit w-full left-0 text-center text-black p-5 z-30 md:z-60 ${
          isShown ? "flex flex-col md:flex" : "hidden md:flex"
        }`}
      >
        <Link className="my-3 md:my-0" href="/">
          Inicio
        </Link>
        <Link className="my-3 md:my-0" href="/products">
          Tienda
        </Link>
        <Link className="my-3 md:my-0" href="/login">
          Iniciar Sesión
        </Link>
        <Link className="my-3 md:my-0" href="/register">
          Registrarse
        </Link>
        <Link className="my-3 md:my-0" href="/profile">
          Mi Perfil
        </Link>
      </div>
    </header>
  );
};
export default Header;
