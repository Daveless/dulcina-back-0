import Product from "../catalog/products/Product";
import { ProductSqueleton } from "../ui/Squeletons";
const CarrouselSlider = ({ products }) => {
  return (
    <div
      className={`xl:m-auto xl:snap-none xl:justify-between xl:w-[95%] xl:overflow-x-hidden xl:grid xl:gap-10 xl:grid-cols-4 snap-mandatory snap-x flex flex-row gap-7 overflow-x-scroll`}
    >
      {products
        ? products?.map((p) => (
            <Product
              key={p?.id}
              id={p?.id}
              name={p?.name}
              image={p?.imageUrl}
              price={p?.price}
              slider={true}
            />
          ))
        : [1, 2, 3, 4].map((p) => <ProductSqueleton key={p} />)}
    </div>
  );
};
export default CarrouselSlider;
