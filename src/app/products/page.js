import { Filters, ListProducts } from "../components";

const Products = () => {
  return (
    <div className="bg-[#f2f2f2] text-black ">
      <div className="flex">
        <Filters />
        <ListProducts />
      </div>
    </div>
  );
};
export default Products;
