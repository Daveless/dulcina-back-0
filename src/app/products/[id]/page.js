import {
  Layout,
  ProductDetails
} from "@/app/components";

const Product = ({ params }) => {
  const { id } = params;
  const options = [
    "Feliz Día",
    "Feliz Navidad",
    "Feliz Cumpleaños",
    "Personalizado",
  ];

  const product = {
    name:"Buzo Puma Classics Oversized",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    options:options,
    price:"20.50"
  }

  return (
    <Layout>
      <ProductDetails product={product}/>
    </Layout>
  );
};
export default Product;
