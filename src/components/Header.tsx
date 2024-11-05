import { useContext, useState } from "react";
import img from "../image/istockphoto-1206806317-612x612.jpg";
import { UserContext } from "../page/HomePage";
import { EachProductType, HeaderPropType } from "../type/type";
import CartItems from "./CartItems";

function Header({ data }: HeaderPropType) {
  const cartInfo = useContext(UserContext);
  const [cartClicked, setCartClicked] = useState(false);
  const cartToggle = () => setCartClicked((prev) => !prev);
  return (
    <div className="h-[100px] w-full flex items-center justify-around">
      <input
        className="border-[2px] border-[black]"
        placeholder="search..."
        onChange={(e) => cartInfo?.setInputString(e.target.value)}
      />
      <span className="text-[40px] font-bold underline">Products</span>
      <div className="flex gap-[5px] items-center pt-[10px] w-1/3">
      <div className="h-[50px] relative" onClick={() => cartToggle()}>
        <img className="w-[50px] h-[50px]" src={img} alt="" />
        <span className="absolute bottom-[40px] right-[0px] text-[20px] font-bold text-white bg-[#AA0000] px-[10px] rounded-full">
          {cartInfo?.itemsInCart.length}
        </span>
      </div>
      {cartClicked && (
        <CartItems data={data} cartItems={cartInfo?.itemsInCart} />
      )}
      </div>
    </div>
  );
}

export default Header;
