import Product from "./Product";

const ArrayProducts = [
  {
    id: 1,
    name: "Fresas y Masmellos",
    image: "https://dulcina.org/imgs/producto9.png",
    price: 16.99,
  },
  {
    id: 2,
    name: "Fresas y Masmellos",
    image: "https://dulcina.org/imgs/producto9.png",
    price: 16.99,
  },
  {
    id: 3,
    name: "Fresas y Masmellos",
    image: "https://dulcina.org/imgs/producto9.png",
    price: 16.99,
  },
  {
    id: 4,
    name: "Fresas y Masmellos",
    image: "https://dulcina.org/imgs/producto9.png",
    price: 16.99,
  },
  {
    id: 5,
    name: "Fresas y Masmellos",
    image: "https://dulcina.org/imgs/producto9.png",
    price: 16.99,
  },
  {
    id: 6,
    name: "Fresas y Masmellos",
    image: "https://dulcina.org/imgs/producto9.png",
    price: 16.99,
  },
  {
    id: 7,
    name: "Fresas y Masmellos",
    image: "https://dulcina.org/imgs/producto9.png",
    price: 16.99,
  },
  {
    id: 8,
    name: "Fresas y Masmellos",
    image: "https://dulcina.org/imgs/producto9.png",
    price: 16.99,
  },
];
const ListProducts = () => {
  return (
    <div className="bg-[#f2f2f2] text-black grid grid-cols-3">
      {ArrayProducts.map((p) => (
        <Product
        key={p.id}
        id={p.id}
        name={p.name}
        image={p.image}
        price={p.price}
        />        
      ))}
    </div>
  );
};

export default ListProducts;
