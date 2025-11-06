import { createContext } from "react";

export type CartItemType = {
  id: any;
  img: string;
  name: string;
  price: number;
  quantity: number;
};

export type MyContextType = {
  cartList: CartItemType[] | undefined;
  addToCart: (newItem: CartItemType) => void;
};

const MyContext = createContext<MyContextType | undefined>(undefined);

export default MyContext;
