import { BsInstagram } from "react-icons/bs";
import { ImageItem } from "../ui";

const IgSection = () => {
  return (
    <div className="flex cursor-pointer">
      <ImageItem
        h={"300px"}
        w={"283.4px"}
        img={
          "https://res.cloudinary.com/dccvupp4x/image/upload/v1692385868/dulcina/czy29ygswl1uilg5mtx9.jpg"
        }
      >
        <BsInstagram size={"60px"}/>
      </ImageItem>
      <ImageItem
        h={"300px"}
        w={"283.4px"}
        img={
          "https://res.cloudinary.com/dccvupp4x/image/upload/v1692334970/dulcina/ppubzayebcdj2rp1vzqu.jpg"
        }
      >
        <BsInstagram size={"60px"}/>
      </ImageItem>
      <ImageItem
        h={"300px"}
        w={"283.4px"}
        img={
          "https://res.cloudinary.com/dccvupp4x/image/upload/v1692386303/dulcina/ewrs1zlasmvlircnzql7.jpg"
        }
      >
        <BsInstagram size={"60px"}/>
      </ImageItem>
      <ImageItem
        h={"300px"}
        w={"283.4px"}
        img={
          "https://res.cloudinary.com/dccvupp4x/image/upload/f_auto,q_auto/v1/dulcina/mxue4vna37rvenilkmr0"
        }
      >
        <BsInstagram size={"60px"}/>
      </ImageItem>
      <ImageItem
        h={"300px"}
        w={"283.4px"}
        img={
          "https://res.cloudinary.com/dccvupp4x/image/upload/f_auto,q_auto/v1/dulcina/msqxrzugjgtnuxy0ihcl"
        }
      >
        <BsInstagram size={"60px"}/>
      </ImageItem>
    </div>
  );
};

export default IgSection;
