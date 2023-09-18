import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { IgSection, ImageItem, LandingLayout, Slider } from "./components";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <LandingLayout>
        <div className="h-[692px]"></div>
      </LandingLayout>
      <div className="flex flex-col justify-center items-center h-screen">
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
        <div className="flex">
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
      <IgSection />
    </>
  );
}
