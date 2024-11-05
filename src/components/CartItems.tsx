import React, { useContext, useEffect, useState } from "react";
import { CartItemsPropType, EachProductType } from "../type/type";
import { UserContext } from "../page/HomePage";

function CartItems({ data, cartItems }: CartItemsPropType) {
  const cartInfo = useContext(UserContext);
  const cartString = localStorage.getItem("cart");
  const cart = cartString ? JSON.parse(cartString) : [];
  const removeFromCart = (product:EachProductType) => {
    const newCart = cart.filter(
      (element: EachProductType) => element.id !== product.id
    );
    cartInfo?.setItemsInCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
  return (
    <div className="w-[400px] max-h-[600px] bg-white z-10 top-[20px] flex flex-col text-black p-[10px] gap-[30px] overflow-y-auto">
      {cartItems?.length ?
        cartItems.map((product: EachProductType) => (
          <div key={product.id} className="flex w-100 justify-between border-[2px] p-[10px]">
            <div className="flex gap-[10px] items-center">
              <div
                className="w-[50px] h-[50px]"
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              <span className="text-[18px] font-bold max-w-[150px] truncate">{product.title}</span>
            </div>
            <button className="bg-black text-white font-bold rounded-[8px]"
            onClick={()=> removeFromCart(product)}>remove from cart</button>
          </div>
        )): <span className="text-[25px]">No products added to cart</span>
      }
    </div>
  );
}

export default CartItems;
