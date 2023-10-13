import { useDispatch, useSelector } from "react-redux";
import "../../form/SelectInput.css";
import { changeSortInput } from "@/redux/features/sort-slice";
import { pSortProductsByPop, pSortProductsByTime } from "@/redux/features/product-slice";
import { fSortProductsByPop, fSortProductsByTime } from "@/redux/features/filter-slice";

const Sort = ({ options }) => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state) => state.productsReducer?.allProducts?.products
  );
  const filtered = useSelector((state) => state.filterReducer.value.filtered);

  const onChange = (e) => {    
    dispatch(changeSortInput(e.target.value));
  };
  return (
    <div className="flex text-[#222222]  justify-between">
      <label className="font-medium ">Ordenar por</label>
      <div className=" focus:border-none select text-[#535353]">
        <select onChange={onChange} className=" focus:border-none pl-[10px] w-[130px]">
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Sort;
