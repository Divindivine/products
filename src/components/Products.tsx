import { useContext } from "react";
import { UserContext } from "../page/HomePage";
import { EachProductType, ProductComponentPropType } from "../type/type";
import CartButton from "./CartButton";

function Products({ data, isLoading, isError }: ProductComponentPropType) {
  const inputedData = useContext(UserContext);

  if (isLoading)
    return <span className="text-[40px] h-screen">Loading Products</span>;

  if (isError)
    return (
      <span className="text-[40px] h-screen">
        error while fetching products
      </span>
    );

  const input = inputedData?.inputString;
  const filterdData = data.filter((product: EachProductType) => {
    if (input) {
      if (product.title.toLowerCase().includes(input.toLowerCase()))
        return product;
    } else return product;
  });

  return (
    <div className=" flex flex-wrap w-full justify-center items-center gap-[30px]">
      {filterdData.length !== 0 ? (
        filterdData.map((product: EachProductType) => (
          <div
            key={product.id}
            className="products w-1/6 flex flex-col border-[4px] border-black rounded-[10px] bg-white p-[20px] hover:px-[10px] hover:font-serif"
          >
            <div className=" flex flex-col">
              {" "}
              <div
                className="product-image w-full h-[300px] rounded-[10px] border-[2px] border-black"
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              <span className="text-[20px] text-left font-bold h-[25px] truncate">
                {product.title}
              </span>
              <div className="flex justify-between items-center">
                <span className="text-left">
                  price: <span className="text-[22px]">${product.price}</span>
                </span>
                <div className="flex flex-col">
                  <span className="text-slate-500">
                    rating: {product.rating.rate}
                  </span>
                  <span className="text-slate-500">
                    count: {product.rating.count}
                  </span>
                </div>
              </div>
              <CartButton product={product} />
            </div>
          </div>
        ))
      ) : (
        <span className="text-[40px] h-screen">
          oops something went wrong!!
        </span>
      )}
    </div>
  );
}

export default Products;
