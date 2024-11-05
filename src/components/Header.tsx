import { useContext, useState } from "react";
import img from "../image/istockphoto-1206806317-612x612.jpg";
import { UserContext } from "../page/HomePage";
import { EachProductType, HeaderPropType } from "../type/type";
import CartItems from "./CartItems";

function Header({ cartClicked, setCartClicked }: HeaderPropType) {
  const cartInfo = useContext(UserContext);
  const cartToggle = () => setCartClicked((prev) => !prev);
  return (
    <div className="h-[100px] w-full flex items-center justify-between px-[10px]">
     
      <span className="text-[40px] font-bold underline">Products</span>
      <div className="cart-and-input flex gap-[100px] items-center pt-[10px] ">
     
      <div className="h-[50px] relative" onClick={() => cartToggle()}>
        <img className="w-[50px] h-[50px]" src={img} alt="" />
        <span className="absolute bottom-[40px] right-[0px] text-[20px] font-bold text-white bg-[#AA0000] px-[10px] rounded-full">
          {cartInfo?.itemsInCart.length}
        </span>
      </div>
      {cartClicked && (
        <CartItems setCartClicked={setCartClicked} cartItems={cartInfo?.itemsInCart} />
      )}
      
      <input
        className="border-[2px] border-[black] rounded-[20px] h-[30px]"
        placeholder="search..."
        onChange={(e) => cartInfo?.setInputString(e.target.value)}
      />
      </div>
    </div>
  );
}

export default Header;
