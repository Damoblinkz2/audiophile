import { Outlet } from "react-router-dom";
import { useState } from "react";

import Banner from "@/components/banner";
import Footer from "@/components/footer";
import NavBar from "@/components/navBar";
import MyContext, { CartItemType } from "@/context/context";

const navigation = [
  { name: "home", href: "/" },
  { name: "headphones", href: "headphones" },
  { name: "speakers", href: "speakers" },
  { name: "earphones", href: "earphones" },
];

const Frame = () => {
  const [cartList, setCartList] = useState<CartItemType[]>([]);

  const addToCart = (newItem: CartItemType) => {
    setCartList((prev) => [...prev, newItem]);
  };

  const clearCart = () => {
    setCartList([]);
  };
  return (
    <>
      <NavBar navigation={navigation} cart={cartList} clearCart={clearCart} />

      <MyContext.Provider value={{ cartList, addToCart }}>
        <Outlet />
      </MyContext.Provider>

      <div className="container mx-auto px-[10%]">
        <Banner />
      </div>
      <Footer navigation={navigation} />
    </>
  );
};

export default Frame;
