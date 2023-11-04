import { Filters, Layout, ListProducts, UxProducts } from "../components";

const Products = () => {
  return (
    <>
      <Layout
        padding={true}
        pageDescription={"Tienda online"}
        title={"Dulcina"}
      >
        <div className="min-h-screen">
          <div className=" text-black ">
            <UxProducts />
            <div className="flex flex-col md:flex-row w-[95%] xl:w-[87%] gap-[2rem] xl:gap-[6.5rem] mx-auto">
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
