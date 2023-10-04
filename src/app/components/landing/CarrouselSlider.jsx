import Product from "../catalog/products/Product";
import { ProductSqueleton } from "../ui/Squeletons";
const CarrouselSlider = ({ products }) => {
  return (
    <div className="xl:m-auto xl:snap-none xl:justify-between xl:w-[95%] xl:overflow-x-hidden xl:grid xl:gap-10 xl:grid-cols-5 snap-mandatory snap-x flex flex-row gap-6 overflow-x-scroll ">
      {products
        ? products?.map((p) => (
            <Product
              className="snap-center"
              key={p?.id}
              id={p?.id}
              name={p?.name}
              image={p?.imageUrl}
              price={p?.price}
            />
          ))
        : [1, 2, 3, 4, 5].map((p) => <ProductSqueleton />)}
    </div>
  );
};
export default CarrouselSlider;
