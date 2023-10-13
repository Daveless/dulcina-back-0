import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const FooterContainer = () => {
  return (
    <div className="text-[#222222] bg-[#E4E4E4] flex justify-center items-center py-2 sm:py-10">
      <div className="flex flex-col-reverse sm:flex-row justify-around w-[90%] mx-auto gap-7">
        <div className="flex justify-around">
          <div className="flex flex-col justify-between text-center">
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
        <div className="flex flex-col items-center justify-between sm:justify-start sm:gap-2">
          <h1 className="text-bold text-3xl font-lobster">Dulcina</h1>

          <div className="flex w-[110px] pl-[5px] text-[#272727] justify-between">
            <BsInstagram size={"30px"} />
            <FaFacebookF size={"30px"} />
            <BsWhatsapp size={"30px"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContainer;
