/**
 * Frame component serves as the main layout wrapper for the application.
 * It provides the navigation bar, footer, and a context provider for cart management.
 * The Outlet renders the current route's component.
 */
import { Outlet } from "react-router-dom";
import { useState } from "react";

import Banner from "@/components/banner";
import Footer from "@/components/footer";
import NavBar from "@/components/navBar";
import MyContext, { CartItemType } from "@/context/context";

/**
 * Navigation array defining the main menu items for the site.
 * Each item has a name and href for routing.
 */
const navigation = [
  { name: "home", href: "/" },
  { name: "headphones", href: "headphones" },
  { name: "speakers", href: "speakers" },
  { name: "earphones", href: "earphones" },
];

/**
 * Frame component that wraps the entire application layout.
 * Manages the cart state and provides it via context to child components.
 */
const Frame = () => {
  // State to hold the list of items in the cart
  const [cartList, setCartList] = useState<CartItemType[]>([]);

  /**
   * Adds a new item to the cart.
   * @param newItem - The item to add to the cart.
   */
  const addToCart = (newItem: CartItemType) => {
    setCartList((prev) => [...prev, newItem]);
  };

  /**
   * Clears all items from the cart.
   */
  const clearCart = () => {
    setCartList([]);
  };

  /**
   * Removes a specific item from the cart by its ID.
   * @param id - The ID of the item to remove.
   */
  const removeItem = (id: string | number) => {
    const cart = cartList?.filter((obj) => obj.id !== id);
    setCartList(cart);
  };

  /**
   * Increases the quantity of a specific item in the cart by its ID.
   * @param id - The ID of the item to increase quantity.
   */
  const increaseQuantity = (id: any) => {
    setCartList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  /**
   * Decreases the quantity of a specific item in the cart by its ID.
   * If quantity reaches 0, removes the item from the cart.
   * @param id - The ID of the item to decrease quantity.
   */
  const decreaseQuantity = (id: any) => {
    setCartList(
      (prev) =>
        prev
          .map((item) =>
            item.id === id
              ? item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : null
              : item,
          )
          .filter(Boolean) as CartItemType[],
    );
  };

  return (
    <>
      {/* Navigation bar with menu items, cart display, and cart management functions */}
      <NavBar
        navigation={navigation}
        cart={cartList}
        clearCart={clearCart}
        remove={removeItem}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />

      {/* Context provider to share cart state with child components */}
      <MyContext.Provider
        value={{ cartList, addToCart, increaseQuantity, decreaseQuantity }}
      >
        <Outlet />
      </MyContext.Provider>

      {/* Banner component wrapped in a container */}
      <div className="container mx-auto px-[10%]">
        <Banner />
      </div>

      {/* Footer with navigation links */}
      <Footer navigation={navigation} />
    </>
  );
};

export default Frame;
