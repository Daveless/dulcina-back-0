import convertToDecimal from "@/assets/toDecimal";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "400"],
});

function toggleSlashAsterisco(texto) {
  if (texto.includes("/")) {
    // Reemplazar todas las ocurrencias de "/" por "*"
    const textoModificado = texto
      .split("")
      .map((c) => (c === "/" ? "*" : c))
      .join("");
    return textoModificado;
  } else if (texto.includes("*")) {
    // Reemplazar todas las ocurrencias de "*" por "/"
    const textoModificado = texto
      .split("")
      .map((c) => (c === "*" ? "/" : c))
      .join("");
    return textoModificado;
  } else {
    // Si no hay ni "/" ni "*", devolver el mismo texto
    return texto;
  }
}

const Product = ({ id, name, image, price, slider }) => {
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
  return (
    <Link href={`products/${id}`}>
      <div
        className={`flex ${
          slider ? "w-[290px]" : "w-full"
        } flex-col p-3 h-full ${
          slider ? "aspect-square" : "aspect-[5/3]"
        } mx-auto justify-center items-start`}
      >
        <div className="relative grid justify-start items-start w-full h-[300px]  ">
          <Image
            alt={name}
            src={toggleSlashAsterisco(image)}
            fill={true}
            className="object-scale-down rounded-xl w-full absolute"
          />
        </div>

        <div className={`${montserrat.className}`}>
          <h2 className="text-[20px] capitalize font-[600]">{name}</h2>
          <p className="text-[18px] font-[400] text-[#6D6D6D]">
            ${convertToDecimal(price)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
