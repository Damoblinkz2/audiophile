/**
 * ProductDetails component displays detailed information about a product,
 * including image, name, description, price, and add-to-cart functionality.
 * It allows users to adjust quantity and add the product to the cart.
 */
import { useState } from "react";
import { useContext } from "react";

import Button from "./button";
import MyContext from "@/context/context";

/**
 * Props interface for the ProductDetails component.
 */
type productDetailsProps = {
  /** Unique identifier for the product */
  id: any;
  /** Image source path for the product */
  img: string;
  /** Product name */
  name: string;
  /** Product description */
  desc: string;
  /** Product price */
  price: number;
  /** Flag indicating if the product is new */
  newProduct: boolean;
};

/**
 * ProductDetails component for displaying and managing product details.
 * @param props - The props for the component.
 * @returns The rendered ProductDetails component.
 */
const ProductDetails = ({
  id,
  img,
  name,
  desc,
  price,
  newProduct,
}: productDetailsProps) => {
  // State for the quantity counter
  const [counter, setCounter] = useState(1);

  // Format the price as USD currency with cents
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2, // Shows cents
  }).format(price);

  // Access the cart context
  const context = useContext(MyContext);

  // Error handling if context is not available
  if (!context) return <div>Error: Cant access cart</div>;

  // Destructure addToCart function and cartList from context
  const { addToCart, cartList } = context;

  // Check if the product is already in the cart
  const inCart = cartList?.find((item) => item.id === id);

  // Create a new item object for adding to cart
  const newItem = {
    id,
    name,
    img,
    price,
    quantity: counter,
  };

  /**
   * Handles adding the product to the cart.
   */
  const handleAddToCart = () => {
    addToCart(newItem);
  };

  return (
    <div className="productDetails p-[20px] mb-[30px] flex gap-2.5 items-center flex-col md:flex-row">
      {/* Product image container */}
      <div className="h-[400px]">
        <img src={`../${img}`} className="object-contain h-[100%]" alt={name} />
      </div>

      {/* Product details section */}
      <div className="p-[35px] max-w-[450px]">
        {/* New product badge if applicable */}
        {newProduct && (
          <h4 className="mb-3 uppercase tracking-[7px] font-[400] text-[color:var(--color1)]">
            new product
          </h4>
        )}

        {/* Product name */}
        <h1 className="mb-4 font-bold text-[40px] leading-[44px] tracking-[1.43px] uppercase ">
          {name}
        </h1>

        {/* Product description */}
        <p className="text-[15px] leading-[25px] opacity-[50%] text-[color:var(--black)]">
          {desc}
        </p>

        {/* Product price */}
        <h3 className="mt-4 h-[25px] text-[18px] font-bold tracking-[1.29px] ">
          {formattedAmount}
        </h3>

        {/* Quantity selector and add to cart button */}
        <div className="flex gap-2.5 mt-5">
          {!inCart ? (
            <>
              {/* Quantity counter */}
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

              {/* Add to cart button */}
              <Button
                label="ADD TO CART"
                on_click={handleAddToCart}
                style="bg-[color:var(--color1)] text-[var(--white)] hover:bg-[color:var(--color1-light)] w-[160px] h-[48px]"
              />
            </>
          ) : (
            // Display if already in cart
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
