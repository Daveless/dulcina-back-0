import Link from "next/link";

const Product = ({ id, name, image, price, description }) => {
  return (
    <Link href={`products/${id}`}>
        <div className="flex flex-col h-[375px] mb-[50px] justify-between">
          <div className=" flex justify-center  bg-[#EAEAEA] h-[300px] w-[235px] ">
            <img src={image} className="object-contain" />
          </div>
          <div>
            <h2 className="text-[20px] font-medium">{name}</h2>
            <p className="text-[18px] font-normal">{price}</p>
          </div>
        </div>
    </Link>
  );
};

export default Product;
