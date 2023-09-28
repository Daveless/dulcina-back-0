import { FormContainer, Layout } from "@/app/components";

const ProductForm = () => {
  return (
    <Layout pageDescription={"Tienda online"} title={"Dulcina"}>
      <div className="bg-[#f2f2f2]">
        <h2 className="ml-[110px] text-[40px] font-bold text-[#222222]">
          Crear un producto
        </h2>
        <FormContainer />
      </div>
    </Layout>
  );
};

export default ProductForm;
