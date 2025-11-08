/**
 * Hero component displays the main promotional banner for the site,
 * featuring a new product announcement with image, description, and a link to the product page.
 */
"use client";
import { Link } from "react-router-dom";

/**
 * Hero component for the homepage banner.
 * @returns The rendered Hero component.
 */
export default function Hero() {
  return (
    <div className="bg-[color:var(--black)] flex justify-between flex-col-reverse md:flex-row gap-2.5 items-center mt-[75px] p-[20px]">
      {/* Text content section */}
      <div className="mx-auto text-center md:text-left p-[30px]">
        <div className="md:max-w-[75%]">
          {/* New product badge */}
          <h4 className="mb-3 uppercase tracking-[7px] font-[400] text-[color:var(--color1)]">
            new product
          </h4>

          {/* Product title */}
          <h1 className="text-[29px] font-semibold tracking-tight text-balance text-white sm:text-[40px] uppercase">
            XX99 Mark II Headphones
          </h1>

          {/* Product description */}
          <p className="mt-8 text-[16px] font-medium text-pretty text-gray-400 sm:text-xl/8">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          {/* Call-to-action button */}
          <div className="mt-10">
            <Link
              to="headphones/xx99-mark-ii-headphones"
              className="md:max-w-[50%] bg-[color:var(--color1)] hover:bg-[color:var(--color1-light)] text-[var(--white)] text-center block text-base mt-[25px] mb-[15px] mx-0 p-3"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="">
        <img
          src="../assets/hero.png"
          className="w-[100%]"
          alt="XX99 Mark II Headphones"
        />
      </div>
    </div>
  );
}
