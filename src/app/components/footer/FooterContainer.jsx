import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Montserrat, Lobster } from "next/font/google";
import Link from "next/link";
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
    <div className="flex flex-col bg-[#E4E4E4]">
      <div
        className={`text-[#222222]  flex justify-center items-center pt-20 pb-8 sm:py-4 ${montserrat.className}`}
      >
        <div className="flex flex-col-reverse sm:flex-row justify-start sm:justify-around text-left w-[10rem] sm:w-[80%] mx-auto gap-6">
          <div className="flex justify-left">
            <div className="flex flex-col justify-between text-left gap-2">
              <h3 className="font-extrabold text-[18px]">Sobre Nosotros</h3>
              <Link
                href={"https://api.whatsapp.com/send?phone=593978778213"}
                target="_blank"
              >
                <p className="text-sm">Acerca de Nosotros</p>
              </Link>
              <Link
                href={"https://api.whatsapp.com/send?phone=593978778213"}
                target="_blank"
              >
                <p className="text-sm">Preguntas frecuentes</p>
              </Link>
              <Link
                href={"https://api.whatsapp.com/send?phone=593978778213"}
                target="_blank"
              >
                <p className="text-sm">Contacto y soporte</p>
              </Link>
            </div>
          </div>
          <div className="flex justify-left gap-2 sm:justify-start flex-col">
            <h3 className="font-bold text-[20px] text-left">Contactanos</h3>
            <Link
              href={"https://api.whatsapp.com/send?phone=593978778213"}
              target="_blank"
            >
              <p className="text-left text-sm">+593978778213</p>
            </Link>
          </div>
          <div className="flex flex-col gap-3 items-start w-full sm:w-[8rem] sm:ml-20 xl:ml-36 justify-start sm:justify-start sm:gap-2">
            <h1
              className={`text-bold text-5xl sm:text-3xl text-center w-full ${lobster.className}`}
            >
              Dulcina
            </h1>

            <div className="flex w-full sm:w-full gap-5 text-[#272727] justify-between">
              <Link
                target="_blank"
                href={"https://www.instagram.com/dulcina.chocolates/"}
              >
                <BsInstagram size={"30px"} className="sm:w-[24px]" />
              </Link>
              <Link
                href={"https://www.facebook.com/Dulcinachocolates"}
                target="_blank"
              >
                <FaFacebookF size={"30px"} className="sm:w-[24px]" />
              </Link>
              <Link
                href={"https://api.whatsapp.com/send?phone=593978778213"}
                target="_blank"
              >
                <BsWhatsapp size={"30px"} className="sm:w-[24px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center w-[67%] m-auto text-sm text-[#737373] mb-5 mt-12">
        <p>
          2023 | Sitio web desarrollado por
          <Link target="_blank" href={"https://google.com"}>
            {" "}
            Mateo Rojas
          </Link>{" "}
          &
          <Link target="_blank" href={"https://google.com"}>
            {" "}
            David Rojas
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FooterContainer;
