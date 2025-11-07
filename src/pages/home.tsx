import { Link } from "react-router-dom";

import Hero from "@/components/hero";
import ShopCard from "@/components/shopCard";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-[10%]">
        <ShopCard />
        <div className="bg-[color:var(--color1)] flex justify-between flex-col rounded-[5px] md:flex-row gap-2.5 items-center mt-[75px] px-[20px] py-0">
          <div className="">
            <img src="../assets/img-30.png" className="w-[100%]" />
          </div>
          <div className="mx-auto text-center md:text-left p-[30px]">
            <div className="md:max-w-[75%]">
              <h1 className="text-[29px] font-semibold tracking-tight text-[var(--white)] sm:text-[40px] uppercase">
                zx9 speaker
              </h1>
              <p className="mt-8 text-[16px] font-medium text-pretty text-[var(--black)] opacity-[50%] sm:text-xl/8">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <div className="mt-10">
                <Link
                  to="speakers/zx9-speaker"
                  className="md:max-w-[50%] bg-[color:var(--black)] hover:bg-[color:var(--color1-light)] text-[var(--white)] text-center block text-base mt-[25px] mb-[15px] mx-0 p-3"
                >
                  SEE PRODUCT
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="px-[20px] my-[20px] py-[50px] rounded-[5px] bg-[url('../assets/img-31.png')] bg-cover bg-center bg-no-repeat">
          <div>
            <h1 className="text-[29px] font-semibold tracking-tight text-[var(--black)] sm:text-[40px] uppercase">
              ZX7 Speaker
            </h1>
            <Link
              to="speakers/zx7-speaker"
              className=" md:max-w-[30%] bg-[color:var(--black)] hover:bg-[color:var(--color1-light)] text-[var(--white)] text-center block text-base mt-[25px] mb-[15px] mx-0 p-3"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
        {/*  */}
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
