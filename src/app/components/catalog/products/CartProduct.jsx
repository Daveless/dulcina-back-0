import convertToDecimal from "@/assets/toDecimal";
import { ChangeCartLength } from "@/redux/features/cart-slice";
import Image from "next/image";
import { useDispatch } from "react-redux";

const CartProduct = ({ id,name, price, amount,setCartProducts, imageUrl }) => {
  const dispatch = useDispatch()
  const DeleteProductCart = () => {
    // Obtener los datos del producto seleccionado
    const localProduct = {
      id: id,
      name: name,
      price: price,
    };

    // Obtener el carrito actual desde el localStorage
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Verificar si el producto ya está en el carrito
    const existingProductIndex = cart.findIndex(
      (item) => item.id === localProduct.id
      );

    if (existingProductIndex >= 0) {
      // Si el producto ya está en el carrito, aumentar la cantidad
      cart[existingProductIndex].quantity --;
      if(cart[existingProductIndex].quantity == 0)
      cart = cart.filter((e)=>e.id !== localProduct.id);
    }

    // Actualizar el carrito en el localStorage
    setCartProducts(cart)
    localStorage.setItem("cartItems", JSON.stringify(cart));
    dispatch(ChangeCartLength(cart.length));

    // Actualizar el estado del número de productos en el carrito
  };
  return (
    <div className="flex">
      <div className="h-[100px] w-[100px]">
        <Image
          style={{ objectFit: "contain" }}
          alt="product"
          src={imageUrl}
          sizes="33vw"
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col">
        <p>{name}</p>
        <p>${convertToDecimal(price)}</p>
        <button onClick={DeleteProductCart}>eliminar</button>
      </div>
    </div>
  );
};

export default CartProduct;
