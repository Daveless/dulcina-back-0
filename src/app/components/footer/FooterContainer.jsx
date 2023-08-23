import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const FooterContainer = () => {
  return (
    <div className="h-[400px] bg-[#E4E4E4] flex justify-center items-center">
      <div className="flex w-[1000px] justify-between">
        <div className="flex flex-col justify-between h-[170px]">
          <h3 className="font-medium text-[20px]">Sobre Nosotros</h3>
          <p>Acerca de Nosotros</p>
          <p>Preguntas frecuentes</p>
          <p>Política de privacidad</p>
          <p>Términos y condiciones</p>
        </div>
        <div className="flex flex-col justify-between">
          <h3 className="font-medium text-[20px]">Atención al cliente</h3>

          <p> Preguntas frecuentes</p>
          <p>Política de envíos y devoluciones</p>
          <p>Contacto y soporte</p>
          <p>Seguimiento de pedidos</p>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="font-medium text-[20px]">Contactanos</h3>
            <div className="flex flex-col mt-[8px] justify-between h-[60px]">
              <p>administracion@dulcina.org</p>
              <p>+593 097 877 8213</p>
            </div>
          </div>
          <div className="flex w-[90%] pl-[5px] text-[#272727] justify-between">
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
