import { Layout, ProductDetails } from "@/app/components";

const Product = ({ params }) => {
  const { id } = params;
  const options = [
    "Feliz Día",
    "Feliz Navidad",
    "Feliz Cumpleaños",
    "Personalizado",
  ];

  
  return (
    <Layout>
      <ProductDetails id={id} />
    </Layout>
  );
};
export default Product;
