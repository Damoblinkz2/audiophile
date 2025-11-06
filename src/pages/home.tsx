import { Link } from "react-router-dom";

import Hero from "@/components/hero";
import ShopCard from "@/components/shopCard";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-[10%]">
        <ShopCard />
        <div className="grid grid md:grid-cols-[1fr_1fr] grid-cols-[1fr] grid-rows-[1fr_ifr] md:grid-rows-[1fr] gap-[10px] my-[30px]">
          <div className=" rounded-[10px]">
            <img src="../assets/img-25.png" className="w-[100%] contain" />
          </div>
          <div className="rounded-[10px] flex flex-col p-[10%] justify-center items-center bg-[var(--color2)] h-[100%] gap[20px]">
            <h1 className="uppercase font-bold text-[30px]">Yx1 earphones</h1>
            <Link
              to="earphones/yx1-wireless-earphones"
              className="border-2 border-solid border-[var(--black)] p-[10px_30px] font-bold"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
