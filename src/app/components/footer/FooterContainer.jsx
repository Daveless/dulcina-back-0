import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const FooterContainer = () => {
  return (
    <div className="h-[200px] text-[#222222] bg-[#E4E4E4] flex justify-center items-center">
      <div className="flex justify-around w-[100%]">
        <div className="flex w-[400px] justify-between">
          <div className="flex flex-col justify-between h-[100px]">
            <h3 className="font-bold text-[20px]">Sobre Nosotros</h3>
            <p>Acerca de Nosotros</p>
            <p>Preguntas frecuentes</p>
            <p>Contacto y soporte</p>
          </div>
          <div>
            <h3 className="font-bold text-[20px] ">Contactanos</h3>
            <p>+593 978778213</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between">
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
