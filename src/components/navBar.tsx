/**
 * NavBar component provides navigation, mobile menu, and cart functionality.
 * Includes logo, navigation links, cart icon, and dropdown cart/modal menu.
 */
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./button";

/**
 * Props interface for the NavBar component.
 */
type navBarProps = {
  /** Array of navigation items with name and href */
  navigation: any[];
  /** Array of cart items */
  cart: any[];
  /** Function to clear all items from the cart */
  clearCart: () => void;
  /** Function to remove a specific item from the cart */
  remove: any;
  /** Function to increase quantity of an item */
  increaseQuantity?: (id: any) => void;
  /** Function to decrease quantity of an item */
  decreaseQuantity?: (id: any) => void;
};

/**
 * NavBar component for site navigation and cart management.
 * @param props - The props for the NavBar component.
 * @returns The rendered NavBar component.
 */
const NavBar = ({
  navigation,
  cart,
  clearCart,
  remove,
  increaseQuantity,
  decreaseQuantity,
}: navBarProps) => {
  // State for showing/hiding the cart dropdown
  const [showCart, setShowCart] = useState(false);
  // State for mobile menu toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /**
   * Toggles the cart dropdown visibility.
   */
  const handleShowCart = () => {
    if (!showCart) {
      setShowCart(true);
      setMobileMenuOpen(false);
    } else {
      setShowCart(false);
    }
  };

  /**
   * Toggles the mobile menu visibility.
   */
  const handleMobileMenu = () => {
    if (!mobileMenuOpen) {
      setMobileMenuOpen(true);
      setShowCart(false);
    } else {
      setMobileMenuOpen(false);
    }
  };

  /**
   * Formats a number as USD currency without cents.
   * @param amount - The amount to format.
   * @returns The formatted currency string.
   */
  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  // Calculate the total price of all products in the cart
  const totalPriceOfProduct = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <>
      {/* Main navigation bar */}
      <nav
        aria-label="Global"
        className="flex items-center z-[100] fixed top-[0] justify-between h-[80px] container px-[10%] bg-[var(--black)] w-[100vw] "
      >
        {/* Logo/brand */}
        <div className="order-2 md:order-1">
          <a href="/" className="">
            <span className="text-[color:var(--white)] font-bold uppercase">
              AUDIOPHILE
            </span>
          </a>
        </div>

        {/* Mobile menu button and desktop navigation */}
        <div className="order-1 md:order-2">
          <Button
            label={
              !mobileMenuOpen ? (
                <i className="fa-light fa-bars fa-2x hover:text-[var(--color1)]"></i>
              ) : (
                <i className="fa-light fa-xmark fa-2x hover:text-[var(--color1)]"></i>
              )
            }
            style="md:hidden text-[var(--white)]"
            on_click={handleMobileMenu}
          />
          <div className="hidden md:flex md:gap-x-6 lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm/6 font-semibold text-white uppercase hover:text-[var(--color1)]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Cart button */}
        <div className="order-3 relative">
          <Button
            label={
              <i className="fa-light fa-cart-shopping fa-lg hover:text-[var(--color1)]"></i>
            }
            style="text-sm/6 text-white"
            on_click={handleShowCart}
          />
          <span className="absolute top-[-30%] left-[50%] rounded-[50%] bg-[color:var(--color1)] w-[17px] h-[17px] text-[var(--white)] text-[10px] flex justify-center items-center ">
            {cart.length}
          </span>
        </div>
      </nav>

      {/* Overlay for cart and mobile menu */}
      <div className={`${showCart || mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="bg-[color:var(--transparent-black)] fixed absolute z-[10] px-[10px] w-[100%] h-[100vh] overflow-hidden">
          <div className="bg-[color:var(--white)] md:float-right w-[100%]  md:w-[370px] z-20 relative mx-0 my-5 p-5 rounded-[5px] md:right-[10%] ">
            {mobileMenuOpen ? (
              // Mobile navigation menu
              <div>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    onClick={handleMobileMenu}
                    to={item.href}
                    className="text-sm/6 bg-[var(--color2)] h-[40px] p-[10px] m-[5px] font-semibold block uppercase hover:text-[var(--color1)]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            ) : (
              // Cart dropdown
              <>
                <div className="pb-[15px] border-b-[#e8e8e8] border-b border-solid">
                  {`Cart (${cart.length})`}
                  <Button
                    style="float-right p-[5px]"
                    on_click={clearCart}
                    label={<span className="lighter-text">Remove all</span>}
                  />
                </div>
                {cart.length === 0 ? (
                  <p className="font-bold text-center">The cart is empty</p>
                ) : (
                  <>
                    {/* Cart items list */}
                    <ul className="pt-[20px] max-h-[250px] overflow-y-scroll">
                      {cart.map((item) => (
                        <li
                          className="mb-[18px] flex justify-between items-center h-[80px]"
                          key={item.id}
                        >
                          <div className="flex gap[10px] items-center h-[100%] gap-[10px]">
                            <div className="w-[40%] h-[100%]">
                              <img
                                className="h-[100%]"
                                src={`../${item.img}`}
                                alt={item.name}
                              />
                            </div>
                            <div className="h-[100%] px-[2px] py-[7px] overflow-hidden">
                              <span className="overflow-hidden block text-[16px] whitespace-nowrap text-ellipsis uppercase">
                                {item.name}
                              </span>
                              <span className="text-[red] mr-[8px]">
                                {formatAmount(item.price)}
                              </span>
                            </div>
                          </div>

                          {/* Quantity controls and remove button */}
                          <div className="flex flex-col">
                            <div className="counter flex items-center text-center h-[40px] w-[90px] bg-[var(--color2)]">
                              <Button
                                style="w-[30px]"
                                on_click={() => {
                                  if (decreaseQuantity) {
                                    decreaseQuantity(item.id);
                                  }
                                }}
                                label={<i className="fa-light fa-minus"></i>}
                              />
                              <span className="w-[30px] font-medium">
                                {item.quantity}
                              </span>
                              <Button
                                style="w-[30px]"
                                on_click={() => {
                                  if (increaseQuantity) {
                                    increaseQuantity(item.id);
                                  }
                                }}
                                label={<i className="fa-light fa-plus"></i>}
                              />
                            </div>
                            <span
                              onClick={() => remove(item.id)}
                              className="block text-[14px] cursor-pointer text-[var(--color1)] hover:underline text-right"
                            >
                              remove
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>

                    {/* Total price */}
                    <div className="flex justify-between items-center font-bold">
                      <p className="">Total</p>
                      <p>{formatAmount(totalPriceOfProduct)}</p>
                    </div>

                    {/* Checkout button */}
                    <Link
                      onClick={handleShowCart}
                      to="checkout"
                      className="bg-[color:var(--color1)] hover:bg-[color:var(--color1-light)] text-[var(--white)] text-center block text-base mt-[25px] mb-[15px] mx-0 p-3"
                    >
                      CHECKOUT
                    </Link>
                  </>
                )}{" "}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
