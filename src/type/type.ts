export type EachProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type CartPropType = {
  product: EachProductType;
};

export type contextPropType = {
  itemsInCart: EachProductType[];
  setItemsInCart: React.Dispatch<React.SetStateAction<number>>;
  inputString: string;
  setInputString: React.Dispatch<React.SetStateAction<string>>;
};

export type ProductComponentPropType = {
  data: any;
  isLoading: boolean;
  isError: boolean;
};

export type HeaderPropType = {
  data: any;
};

export type CartItemsPropType = {
  data: any;
  cartItems: EachProductType[] | undefined;
};
