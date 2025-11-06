import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./button";

type navBarProps = {
  navigation: any[];
  cart: any[];
  clearCart: () => void;
};

const NavBar = ({ navigation, cart, clearCart }: navBarProps) => {
  const [showCart, setShowCart] = useState(false);
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleShowCart = () => {
    if (!showCart) {
      setShowCart(true);
    } else {
      setShowCart(false);
    }
  };

  return (
    <>
      <nav
        aria-label="Global"
        className="flex items-center z-[100] fixed top-[0] justify-between h-[80px] container mx-auto px-[10%] bg-[var(--black)]"
      >
        <div className="order-2 md:order-1">
          <a href="/" className="">
            <span className="text-[color:var(--white)] font-bold uppercase">
              AUDIOPHILE
            </span>
          </a>
        </div>

        <div className="order-1 md:order-2">
          <div
            className="md:hidden text-[var(--white)]"
            onClick={() => {
              // setMobileMenuOpen(true);
            }}
          >
            <i className="fa-light fa-bars fa-2x"></i>
          </div>
          <div className="hidden md:flex md:gap-x-6 lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm/6 font-semibold text-white uppercase"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="order-3">
          <Button
            label={<i className="fa-light fa-cart-shopping fa-lg"></i>}
            style="text-sm/6 text-white"
            on_click={handleShowCart}
          />
        </div>
      </nav>

      <div className={`${!showCart ? "hidden" : "block"}`}>
        <div className="bg-[color:var(--transparent-black)] absolute z-[10] w-[100%] h-[100vh] overflow-hidden">
          <div className="bg-[color:var(--white)] float-right w-[370px] z-20 relative mx-0 my-5 p-5 rounded-[5px] right-[10%] ">
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
                <ul className="pt-[20px]">
                  {cart.map((item) => (
                    // const [quant,setQuant] =useState(item.quantity);
                    <li
                      className="mb-[18px] flex jusify-between items-center gap-2.5"
                      key={item.id}
                    >
                      <div>
                        <img
                          className="float-left mr-3 w-[20%] h-[100%]"
                          src={`../${item.img}`}
                          alt="item1"
                        />
                        <div>
                          <span className="item-name overflow-hidden block pt-[10px] text-[16px] whitespace-nowrap text-ellipsis">
                            {item.name}
                          </span>
                          <span className="item-price text-[red] mr-[8px]">
                            {new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "USD",
                              minimumFractionDigits: 0,
                            }).format(item.price)}
                          </span>
                        </div>
                      </div>

                      <div className="counter flex items-center text-center h-[40px] w-[90px] bg-[var(--color2)]">
                        <Button
                          style="w-[30px]"
                          on_click={() =>
                            // counter === 1 ? setCounter(1) : setCounter(counter - 1)
                            item.quantity--
                          }
                          label={<i className="fa-light fa-minus"></i>}
                        />
                        <span className="w-[30px] font-medium">
                          {item.quantity}
                        </span>
                        <Button
                          style="w-[30px]"
                          // on_click={() => setCounter(counter + 1)}
                          on_click={() => item.quantity++}
                          label={<i className="fa-light fa-plus"></i>}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center font-bold">
                  <p className="">Total</p>
                  <p>
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                    }).format(
                      cart.reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                      )
                    )}
                  </p>
                </div>

                <Link
                  onClick={handleShowCart}
                  to="checkout"
                  className="bg-[color:var(--color1)] hover:bg-[color:var(--color1-light)] text-[var(--white)] text-center block text-base mt-[25px] mb-[15px] mx-0 p-3"
                >
                  CHECKOUT
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
