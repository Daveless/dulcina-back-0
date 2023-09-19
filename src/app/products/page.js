import { Filters, Layout, ListProducts, UxProducts } from "../components";

const Products = () => {
  return (
    <>
      <Layout padding={true}  pageDescription={"Tienda online"} title={"Dulcina"}>
      <div className="min-h-screen">

        <div className=" text-black ">
          <UxProducts/>
          <div className="flex w-[100%] justify-between">
            <Filters />
            <ListProducts />
          </div>
        </div>
        </div>
      </Layout>
    </>
  );
};
export default Products;
