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
  const isLoading = useSelector((state) => state.productsReducer?.loading);
  const byPrice = useSelector((state) => state.filterReducer.value.byPrice);
  const sortInput = useSelector((state) => state.sortReducer.sortInput);
  const searchInput = useSelector((state) => state.searchReducer.searchInput);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const sorting = (input) => {
    if (input == "Popularidad") {
      return (a, b) => b.times_sold - a.times_sold;
    } else if (input == "Nuevos") {
      return (a, b) => new Date(b.createdAt) - new Date(a.createdAt);
    }
  };

  const toRender = (array) => {
    return array
      .slice()
      .sort(sorting(sortInput))
      ?.map((p) => (
        <Product
          key={p.id}
          id={p.id}
          name={p.name}
          image={p.imageUrl}
          price={p.price}
        />
      ));
  };
  console.log(!!searchInput.length , !products?.length);

  if (
    ((categoryInput.length || (byPrice[0] != 3 && byPrice[1] != 50)) &&
      !filtered?.length) ||
    (searchInput.length && !products?.filter((e) => e.name.includes(searchInput))?.length) ||
    (searchInput.length &&
      (categoryInput.length || (byPrice[0] != 3 && byPrice[1] != 50)) &&
      !filtered?.filter((e) => e.name.includes(searchInput))?.length)
  ) {
    return <div>not found</div>;
  } else
    return (
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] max-w-[950px]  w-[100%] justify-center ">
        {filtered?.length || products?.length
          ? categoryInput || !(byPrice[0] == 3 && byPrice[1] == 50)
            ? searchInput.length
              ? toRender(filtered.filter((e) => e.name.includes(searchInput)))
              : toRender(filtered)
            : searchInput.length
            ? toRender(products.filter((e) => e.name.includes(searchInput)))
            : toRender(products)
          : [1, 2, 3, 4, 5, 6].map((p) => <ProductSqueleton key={p} />)}
      </div>
    );
};

export default ListProducts;
