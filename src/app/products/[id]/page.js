import {
  ButtonContainer,
  CallButton,
  Layout,
  StockButtons,
} from "@/app/components";

const Product = ({ params }) => {
  const { id } = params;
  const listOfButtons = [
    "Feliz Día",
    "Feliz Navidad",
    "Feliz Cumpleaños",
    "Personalizado",
  ];

  return (
    <Layout>
      <div className="min-h-screen">

      <div className="flex text-[#222222] h-[580px]  ">
        <div className="flex w-[50%] h-[100%] justify-center">
          <img src="https://dulcina.org/imgs/producto9.png" />
        </div>
        <div className="w-[50%] h-[100%] pr-[110px] pl-[100px] flex  flex-col justify-between">
          <div>
            <h1 className="text-[33px] font-black leading-tight">
              Buzo Puma Classics Oversized
            </h1>
            <div>{/* icons */}</div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div>
            <h3 className="text-[25px] font-bold">Paleta</h3>
            <ButtonContainer listOfButtons={listOfButtons} />
          </div>
          {/* stock buttons */}
          <div className="flex justify-between">
            <h3 className="text-[40px] font-medium">$20.50</h3>
            <StockButtons />
          </div>

          <CallButton />
        </div>
      </div>
    </div>

    </Layout>
  );
};
export default Product;
