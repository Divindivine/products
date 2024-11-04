import img from "../image/istockphoto-1206806317-612x612.jpg";
import { useContext } from "react";
import { CartPropType, EachProductType } from "../type/type";
import { UserContext } from "../page/HomePage";

function CartButton({ product }: CartPropType) {
  const cartInfo = useContext(UserContext);
  const cartString = localStorage.getItem("cart");
  const cart = cartString ? JSON.parse(cartString) : [];
  const productInCart = cart.some(
    (element: EachProductType) => element.id === product.id
  );

  const addToCart = (product: EachProductType) => {
    cart.push(product);
    cartInfo?.setItemsInCart(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  const removeFromCart = (product: EachProductType) => {
    const newCart = cart.filter(
      (element: EachProductType) => element.id !== product.id
    );
    cartInfo?.setItemsInCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  return (
    <div className="w-full flex mt-[10px]">
      <img className="w-[40px] h-[40px]" src={img} alt="" />

      {productInCart ? (
        <button
          className="bg-black text-white p-[5px] text-[18px] font-semibold rounded-[8px]"
          onClick={() => removeFromCart(product)}
        >
          remove from cart
        </button>
      ) : (
        <button
          className="bg-black text-white p-[5px] text-[18px] font-semibold rounded-[8px]"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default CartButton;
