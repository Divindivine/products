import React, { useContext, useEffect, useState } from "react";
import { CartItemsPropType, EachProductType } from "../type/type";
import { UserContext } from "../page/HomePage";

function CartItems({ data, cartItems }: CartItemsPropType) {
  const cartInfo = useContext(UserContext);
  const cartString = localStorage.getItem("cart");
  const cart = cartString ? JSON.parse(cartString) : [];
  let total: number = 0;
  cartItems?.map((product: EachProductType) => (total += product.price));
  const removeFromCart = (product: EachProductType) => {
    const newCart = cart.filter(
      (element: EachProductType) => element.id !== product.id
    );
    cartInfo?.setItemsInCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  const buyProducts = () => {
    const newArr: EachProductType[] = [];
    localStorage.setItem("cart", JSON.stringify(newArr));
    cartInfo?.setItemsInCart(newArr);
    alert("thankyou see you next time");
  };
  return (
    <div className="w-[400px] max-h-[600px] bg-white absolute right-[300px] top-[30px] z-10 border-[3px] border-black flex flex-col text-black p-[10px] gap-[30px] overflow-y-auto">
      {cartItems?.length ? (
        cartItems.map((product: EachProductType) => (
          <div
            key={product.id}
            className="flex w-100 justify-between border-[2px] p-[10px]"
          >
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
              <span className="text-[18px] font-bold max-w-[150px] truncate">
                {product.title}
              </span>
            </div>
            <button
              className="bg-black p-[5px] text-white font-bold rounded-[8px]"
              onClick={() => removeFromCart(product)}
            >
              remove
            </button>
          </div>
        ))
      ) : (
        <span className="text-[25px]">No products added to cart</span>
      )}
      {cartItems?.length ? (
        <div className="w-full flex items-center justify-between">
          <button
            className="bg-black text-white font-bold rounded-[8px] p-[10px]"
            onClick={() => buyProducts()}
          >
            Buy now
          </button>
          <span className="text-[20px]">
            total: <span className="font-bold text-[24px]">${total}</span>
          </span>
        </div>
      ) : (
        <span>Add product to cart and checkout</span>
      )}
    </div>
  );
}

export default CartItems;
