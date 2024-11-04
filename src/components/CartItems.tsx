import React, { useEffect, useState } from "react";
import { CartItemsPropType, EachProductType } from "../type/type";

function CartItems({ data, cartItems }: CartItemsPropType) {
  // const [productsItems, setproductsItems] = useState<EachProductType[]>([])
  // const products: EachProductType[] = [];
  // let prev:EachProductType[] = []
  console.log(cartItems)
//   if (cartItems) {
//     products.length = 0;
//     cartItems.map((id: number) => {
//       data.map((product: EachProductType) => {
//         if (product.id === id) {
//           products.push(product);
//         }
//       });
//     });
//   }

  return (
    <div
      className="w-[400px] h-[600px] bg-white z-10 absolute flex flex-col text-black ">HAIash
      {/* {cartItems && cartItems.map((product: EachProductType) => (
        <div key={product.id} className="text-[20px] text-black">hI{product.id}</div>
      ))} */}
    </div>
  );
}

export default CartItems;
