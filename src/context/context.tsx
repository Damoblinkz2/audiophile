/**
 * Context for managing the shopping cart state across the application.
 * Provides cart items and functions to add items to the cart.
 */
import { createContext } from "react";

/**
 * Type definition for a cart item.
 */
export type CartItemType = {
  /** Unique identifier for the item */
  id: any;
  /** Image source path for the item */
  img: string;
  /** Name of the item */
  name: string;
  /** Price of the item */
  price: number;
  /** Quantity of the item in the cart */
  quantity: number;
};

/**
 * Type definition for the context value.
 */
export type MyContextType = {
  /** Array of cart items, or undefined if not loaded */
  cartList: CartItemType[] | undefined;
  /** Function to add a new item to the cart */
  addToCart: (newItem: CartItemType) => void;
};

/**
 * React context for cart management.
 * Provides access to cart state and functions throughout the component tree.
 */
const MyContext = createContext<MyContextType | undefined>(undefined);

export default MyContext;
