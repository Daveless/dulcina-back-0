import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { IgSection, ImageItem, LandingLayout } from "./components";
import Link from "next/link";
import { Lobster } from "next/font/google";
import Carrousel from "./components/landing/Carrousel";
import InfoSlider from "./components/landing/InfoSlider";

const lobster = Lobster({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export default function Home() {
  return (
    <>
      <LandingLayout title="Dulcina" pageDescription="asdasd">
        <section className="min-h-screen flex items-center">
          <div className="h-[20rem] w-[90%] m-auto">
            <h2
              className={`text-[3.2rem] sm:text-[5rem]  text-white leading-[3.4rem] sm:leading-[4.8rem] ${lobster.className}`}
            >
              Regalos Inolvidables
            </h2>

            <p className="text-white text-[0.8rem] sm:text-[1.1rem] mt-3 mb-9">
              El detalle perfecto para alegrar cualquier ocasión especial
            </p>

            <Link href="/products">
              <button
                type=""
                className="bg-[#E60023] text-white px-10 sm:px-16 rounded-[0.3rem] text-[0.8rem] sm:text-[1.2rem] py-[0.5rem]"
              >
                Ver Catálogo
              </button>
            </Link>
          </div>
        </section>
      </LandingLayout>

      <div className="sm:h-[500px]">
        <div className="sm:h-[25%] " />

        <div className="flex-col justify-center items-center md:flex hidden">
          <div className="mb-[15px] items-center flex w-[900px] justify-between">
            <p className="text-[35px] text-[#272727] font-serif font-bold">
              Categorias Populares
            </p>
            <Link href="/products">
              <div className="flex w-[145px] items-center justify-between">
                <p>Ver categorías</p>
                <HiOutlineArrowLongRight size={"30px"} />
              </div>
            </Link>
          </div>
          <div className="md:flex hidden">
            <ImageItem
              name={"Bombones"}
              h={"240px"}
              w={"300px"}
              img={
                "https://res.cloudinary.com/dccvupp4x/image/upload/v1693177563/dulcina/landing/items/sofvdc6gi4ocxeu8plhi.jpg"
              }
            />
            <ImageItem
              name={"Fresas"}
              h={"240px"}
              w={"300px"}
              img={
                "https://res.cloudinary.com/dccvupp4x/image/upload/v1693177566/dulcina/landing/items/omf0sbtzszecdhni4vbl.jpg"
              }
            />
            <ImageItem
              name={"Casas"}
              h={"240px"}
              w={"300px"}
              img={
                "https://res.cloudinary.com/dccvupp4x/image/upload/v1693177570/dulcina/landing/items/mldjjjumtilsyhlmno68.jpg"
              }
            />
          </div>
        </div>
      </div>

      <div className="sm:h-[700px]">
        <div className="sm:h-[25%] " />

        <Carrousel />
      </div>
      <div className="sm:h-[600px] ">
        <div className="sm:h-[20%] " />
        <InfoSlider />
      </div>
      <IgSection />
    </>
  );
}
