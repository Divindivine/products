import { createContext, useState } from "react";
import Products from "../components/Products";
import Header from "../components/Header";
import { contextPropType } from "../type/type";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/getProducts";

export const UserContext = createContext<contextPropType | null>(null);

function HomePage() {
  const cartString = localStorage.getItem("cart");
  const cart = cartString ? JSON.parse(cartString) : [];
  const [itemsInCart, setItemsInCart] = useState(cart);
  const [inputString, setInputString] = useState("");
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  const [cartClicked, setCartClicked] = useState(false);
  return (
    <UserContext.Provider
      value={{ itemsInCart, setItemsInCart, inputString, setInputString }}
    >
      <div className="flex flex-col bg-[#B9D9EB] min-w-[500px]">
        <div className="h-[100px] w-full flex justify-center items-center min-w-[500px]">
          <Header cartClicked={cartClicked} setCartClicked={setCartClicked} />
        </div>
        <div
          className="w-full p-[20px] flex justify-center items-center"
          onClick={() => setCartClicked(false)}
        >
          <Products data={data} isLoading={isLoading} isError={isError} />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default HomePage;
