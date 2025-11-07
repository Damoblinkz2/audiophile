import { useState } from "react";
import { useContext } from "react";

import Button from "./button";
import MyContext from "@/context/context";

type productDetailsProps = {
  id: any;
  img: string;
  name: string;
  desc: string;
  price: number;
  newProduct: boolean;
};

const ProductDetails = ({
  id,
  img,
  name,
  desc,
  price,
  newProduct,
}: productDetailsProps) => {
  const [counter, setCounter] = useState(1);
  // const [inCart, setInCart] = useState(false);

  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0, // Removes the .00 cents
  }).format(price);

  const context = useContext(MyContext);

  if (!context) return <div>Error: Cant access cart</div>;

  const { addToCart, cartList } = context;

  // console.log(cartList);

  const inCart = cartList?.find((item) => item.id === id);

  console.log(inCart);

  const newItem = {
    id,
    name,
    img,
    price,
    quantity: counter,
  };
  const handleAddToCart = () => {
    addToCart(newItem);
  };

  return (
    <div className="productDetails p-[20px] mb-[30px] flex gap-2.5 items-center flex-col md:flex-row">
      <div className="h-[400px]">
        <img src={`../${img}`} className="object-contain h-[100%]" />
      </div>
      <div className="p-[35px] max-w-[450px]">
        {newProduct && (
          <h4 className="mb-3 uppercase tracking-[7px] font-[400] text-[color:var(--color1)]">
            new product
          </h4>
        )}
        <h1 className="mb-4 font-bold text-[40px] leading-[44px] tracking-[1.43px] uppercase ">
          {name}
        </h1>
        <p className="text-[15px] leading-[25px] opacity-[50%] text-[color:var(--black)]">
          {desc}
        </p>
        <h3 className="mt-4 h-[25px] text-[18px] font-bold tracking-[1.29px] ">
          {formattedAmount}
        </h3>
        <div className="flex gap-2.5 mt-5">
          {!inCart ? (
            <>
              <div className="counter flex items-center text-center h-[48px] w-[120px] bg-[var(--color2)]">
                <Button
                  style="w-[40px]"
                  on_click={() =>
                    counter === 1 ? setCounter(1) : setCounter(counter - 1)
                  }
                  label={<i className="fa-light fa-minus"></i>}
                />
                <span className="w-[40px] font-medium">{counter}</span>
                <Button
                  style="w-[40px]"
                  on_click={() => setCounter(counter + 1)}
                  label={<i className="fa-light fa-plus"></i>}
                />
              </div>
              <Button
                label="ADD TO CART"
                on_click={handleAddToCart}
                style="bg-[color:var(--color1)] text-[var(--white)] hover:bg-[color:var(--color1-light)] w-[160px] h-[48px]"
              />
            </>
          ) : (
            <div className="bg-[color:var(--color1-light)] flex justify-center items-center w-[160px] h-[48px] text-[var(--white)]">
              ADDED TO CART
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
