"use client";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="bg-[color:var(--black)] flex justify-between flex-col-reverse md:flex-row gap-2.5 items-center mt-[75px] p-[20px]">
      <div className="mx-auto text-center md:text-left p-[30px]">
        <div className="md:max-w-[75%]">
          <h4 className="mb-3 uppercase tracking-[7px] font-[400] text-[color:var(--color1)]">
            new product
          </h4>
          <h1 className="text-[29px] font-semibold tracking-tight text-balance text-white sm:text-[40px] uppercase">
            XX99 Mark II Headphones
          </h1>
          <p className="mt-8 text-[16px] font-medium text-pretty text-gray-400 sm:text-xl/8">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
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
      <div className="">
        <img src="../assets/hero.png" className="w-[100%]" />
      </div>
    </div>
  );
}
