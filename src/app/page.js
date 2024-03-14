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

      {/* <div>
        <Carrousel />
      </div> */}
      <div>
        <div />
        <InfoSlider />
      </div>
      <IgSection />
    </>
  );
}
