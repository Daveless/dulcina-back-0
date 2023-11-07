import convertToDecimal from "@/assets/toDecimal";
import { ChangeCartLength } from "@/redux/features/cart-slice";
import Image from "next/image";
import { useDispatch } from "react-redux";
import QuantityButton from "./QuantityButton";
import toggleSlashAsterisco from "@/assets/toggleSlashAsterisco";

const CartProduct = ({
  id,
  name,
  price,
  amount,
  setCartProducts,
  imageUrl,
  description,
}) => {
  const dispatch = useDispatch();
  const DeleteProductCart = () => {
    // Obtener los datos del producto seleccionado
    const localProduct = {
      id: id,
      name: name,
      price: price,
      description: description,
    };

    // Obtener el carrito actual desde el localStorage
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Verificar si el producto ya está en el carrito
    const existingProductIndex = cart.findIndex(
      (item) => item.id === localProduct.id
    );

    if (existingProductIndex >= 0) {
      // Si el producto ya está en el carrito, aumentar la cantidad
      cart[existingProductIndex].quantity--;
      if (cart[existingProductIndex].quantity == 0)
        cart = cart.filter((e) => e.id !== localProduct.id);
    }

    // Actualizar el carrito en el localStorage
    setCartProducts(cart);
    localStorage.setItem("cartItems", JSON.stringify(cart));
    dispatch(ChangeCartLength(cart.length));

    // Actualizar el estado del número de productos en el carrito
  };
  return (
    <div className="w-full grid grid-cols-[30%_70%] items-top justify-center align-middle">
      <div className="relative grid items-top h-[7rem] w-full">
        <Image
          alt="product"
          src={toggleSlashAsterisco(imageUrl)}
          fill={true}
          className="object-scale-down rounded-xl w-full absolute"
        />
      </div>
      <div className="flex flex-col ml-3 relative">
        <div className="flex gap-5 justify-between">
          <div className="flex flex-col">
            <p className="capitalize font-bold truncate text-[0.9rem]">
              {name}
            </p>
            <p className="text-[0.7rem] text-[#565656] truncate w-[9rem] h-[2rem]">
              {description}
            </p>
          </div>
          <p className="text-[0.9rem] font-bold">${convertToDecimal(price)}</p>
        </div>
        <div className="w-[6rem]">
          <QuantityButton />
        </div>
        <button
          className="absolute bottom-0 right-0 text-[#747474] hover:text-black"
          onClick={DeleteProductCart}
        >
          Eliminar
        </button>
      </div>
      <hr className="col-start-1 col-end-3 my-3" />
    </div>
  );
};

export default CartProduct;
