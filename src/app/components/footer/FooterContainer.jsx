import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Montserrat, Lobster } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "400"],
});
const lobster = Lobster({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const FooterContainer = () => {
  return (
    <div
      className={`text-[#222222] bg-[#E4E4E4] flex justify-center items-center py-2 sm:py-10 ${montserrat.className}`}
    >
      <div className="flex flex-col-reverse sm:flex-row justify-around w-[65%] mx-auto gap-1">
        <div className="flex justify-around">
          <div className="flex flex-col justify-between text-left">
            <h3 className="font-bold text-[20px]">Sobre Nosotros</h3>
            <p>Acerca de Nosotros</p>
            <p>Preguntas frecuentes</p>
            <p>Contacto y soporte</p>
          </div>
        </div>
        <div className="flex justify-around sm:justify-start flex-col">
          <h3 className="font-bold text-[20px] text-center">Contactanos</h3>
          <p className="text-center">+593 978778213</p>
        </div>
        <div className="flex flex-col items-center xl:ml-36 justify-between sm:justify-start  sm:gap-2">
          <h1 className={`text-bold text-4xl ${lobster.className}`}>Dulcina</h1>

          <div className="flex w-[8rem] gap-5 pl-[5px] text-[#272727] justify-between">
            <BsInstagram size={"25px"} />
            <FaFacebookF size={"25px"} />
            <BsWhatsapp size={"25px"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContainer;
