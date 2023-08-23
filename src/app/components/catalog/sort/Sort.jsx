import "../../form/SelectInput.css";

const Sort = ({ options }) => {
  return (
    <div className="flex text-[#222222]  justify-between">
      <label className="font-medium ">Ordenar por</label>
      <div className="select text-[#535353]">
        <select className=" pl-[10px] w-[130px]">
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Sort;
