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
  setItemsInCart: React.Dispatch<any>;
  inputString: string;
  setInputString: React.Dispatch<React.SetStateAction<string>>;
};

export type ProductComponentPropType = {
  data: any;
  isLoading: boolean;
  isError: boolean;
};

export type HeaderPropType = {
  cartClicked: boolean,
  setCartClicked: React.Dispatch<React.SetStateAction<boolean>>
};

export type CartItemsPropType = {
  setCartClicked:  React.Dispatch<React.SetStateAction<boolean>>
  cartItems: EachProductType[] | undefined;
};
