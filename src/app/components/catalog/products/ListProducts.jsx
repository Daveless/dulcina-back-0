"use client";

import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { useEffect } from "react";
import { fetchProducts } from "@/redux/features/product-slice";
import { ProductSqueleton } from "../../ui/Squeletons";

const ListProducts = () => {
  const dispatch = useDispatch();
  const filtered = useSelector((state) => state.filterReducer.value.filtered);
  const categoryInput = useSelector(
    (state) => state.filterReducer.value.byCategory.id
  );
  const products = useSelector(
    (state) => state.productsReducer?.allProducts?.products
  );
  const byPrice = useSelector((state) => state.filterReducer.value.byPrice);
  const sortInput = useSelector((state) => state.sortReducer.sortInput);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
 
const sorting = (input) =>{
  if (input == "Popularidad") {
    return (a, b) => b.times_sold - a.times_sold
  } else if (input == "Nuevos") {
    return (a, b) => new Date(b.createdAt) - new Date(a.createdAt)    
  }}

  if (
    (categoryInput && !filtered?.length) ||
    (byPrice[0] != 3 && byPrice[1] != 50 && !filtered?.length)
  ) {
    return <div>not found</div>;
  } else
    return (
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] max-w-[950px]  w-[100%] justify-center ">
        {filtered?.length || products?.length
          ? categoryInput || !(byPrice[0] == 3 && byPrice[1] == 50)
            ? filtered.slice().sort(sorting(sortInput))?.map((p) => (
                <Product
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  image={p.imageUrl}
                  price={p.price}
                />
              ))
            : products.slice().sort(sorting(sortInput))?.map((p) => (
                <Product
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  image={p.imageUrl}
                  price={p.price}
                />
              ))
          : [1, 2, 3, 4, 5, 6].map((p) => <ProductSqueleton key={p} />)}
      </div>
    );
};

export default ListProducts;
