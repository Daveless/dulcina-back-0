import { BsInstagram } from "react-icons/bs";
import { ImageItem } from "../ui";

const IgSection = () => {
  return (
    <div className="flex cursor-pointer">
      <ImageItem
        h={"300px"}
        w={"283.4px"}
        img={
          "https://res.cloudinary.com/dccvupp4x/image/upload/v1693177276/dulcina/landing/ogdffwvmkpc15ulczulx.jpg"
        }
      >
        <BsInstagram size={"60px"}/>
      </ImageItem>
      <ImageItem
        h={"300px"}
        w={"283.4px"}
        img={
          "https://res.cloudinary.com/dccvupp4x/image/upload/v1693177154/dulcina/landing/ssnsysr3zhjkvnqi4nhz.jpg"
        }
      >
        <BsInstagram size={"60px"}/>
      </ImageItem>
      <ImageItem
        h={"300px"}
        w={"283.4px"}
        img={
          "https://res.cloudinary.com/dccvupp4x/image/upload/v1693176623/dulcina/landing/bcfxv3pcbhtd2ccpblad.jpg"
        }
      >
        <BsInstagram size={"60px"}/>
      </ImageItem>
      <ImageItem
        h={"300px"}
        w={"283.4px"}
        img={
          "https://res.cloudinary.com/dccvupp4x/image/upload/v1693176863/dulcina/landing/euu3mafsx88kwzftyrsx.jpg"
        }
      >
        <BsInstagram size={"60px"}/>
      </ImageItem>
      <ImageItem
        h={"300px"}
        w={"283.4px"}
        img={
          "https://res.cloudinary.com/dccvupp4x/image/upload/v1693177011/dulcina/landing/fbkfe6q4mnaffutev9md.jpg"
        }
      >
        <BsInstagram size={"60px"}/>
      </ImageItem>
    </div>
  );
};

export default IgSection;
