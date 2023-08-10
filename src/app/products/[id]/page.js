import { ButtonContainer, CallButton } from "@/app/components";

const Product = ({ params }) => {
  const { id } = params;
const listOfButtons = [
  "Feliz Día", "Feliz Navidad", "Feliz Cumpleaños", "Personalizado"
]

  return (
    <div className="flex text-[#222222] h-[550px] pt-[35px]">
      <div className="w-[50%] h-[100%]"></div>
      <div className="w-[50%] h-[100%] pr-[110px] pl-[135px] flex  flex-col justify-between">
        <div>
          <h1 className="text-[30px] font-black">
            Buzo Puma Classics Oversized
          </h1>
          <div>{/* icons */}</div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h3 className="text-[25px]">$20.50</h3>
        <div>
          <h3 className="text-[25px] font-bold">Paleta</h3>
          <ButtonContainer listOfButtons={listOfButtons}/>
        </div>
        {/* stock buttons */}
        <CallButton />
      </div>
    </div>
  );
};
export default Product;
