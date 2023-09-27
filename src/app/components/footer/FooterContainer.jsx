import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const FooterContainer = () => {
  return (
    <div className="bg-[#E4E4E4] flex justify-center items-center">
      <div className="flex flex-col justify-between sm:grid sm:grid-cols-2 md:grid-cols-3 md:gap-x-12 w-[80%]">
        <div className="flex flex-col  my-5">
          <div>
            <h3 className="font-semibold text-[24px]">Contactanos</h3>
            <div className="flex flex-col mt-[8px] justify-between h-[60px]">
              <p>+593 097 877 8213</p>
            </div>
          </div>
          <div className="flex w-[70%] text-[#272727] justify-around">
            <BsInstagram size={"30px"} />
            <FaFacebookF size={"30px"} />
            <BsWhatsapp size={"30px"} />
          </div>
        </div>

        <div className="flex flex-col h-[170px] my-5">
          <h3 className="font-semibold text-[24px]">Sobre Nosotros</h3>
          <p className="my-[5px]">Acerca de Nosotros</p>
          <p className="my-[5px]">Preguntas frecuentes</p>
          <p className="my-[5px]">Política de privacidad</p>
          <p className="my-[5px]">Términos y condiciones</p>
        </div>

        <div className="flex flex-col my-5">
          <h3 className="font-semibold text-[24px]">Atención al cliente</h3>

          <p className="my-[5px]"> Preguntas frecuentes</p>
          <p className="my-[5px]">Política de envíos y devoluciones</p>
          <p className="my-[5px]">Contacto y soporte</p>
          <p className="my-[5px]">Seguimiento de pedidos</p>
        </div>
      </div>
    </div>
  );
};

export default FooterContainer;
