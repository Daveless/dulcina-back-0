import convertToDecimal from "@/assets/toDecimal";
import Image from "next/image";
import Link from "next/link";

const Product = ({ id, name, image, price, description }) => {
  return (
    <Link href={`/products/${id}`}>
      <div className="flex flex-col h-[375px] mb-[50px] justify-between">
        <div className=" flex justify-center  bg-[#EAEAEA] h-[300px] w-[235px] ">
          <Image
            src={
              "https://res.cloudinary.com/dccvupp4x/image/upload/f_auto,q_auto/v1/dulcina/products/cq0bnb62y2oumszfugm0"
            }
            width={235}
            height={300}
            sizes="33vw"
            alt="producto"
            objectFit="contain"
          />
        </div>
        <div>
          <h2 className="text-[20px] font-medium">{name}</h2>
          <p className="text-[18px] font-normal">${convertToDecimal(price)}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
