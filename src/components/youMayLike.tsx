import img5 from "../assets/img-5.png";
import img6 from "../assets/img-6.png";
import img7 from "../assets/img-7.png";
import ProductCard from "./productCard";

const YouMayLike = () => {
  return (
    <>
      <h1 className="uppercase font-bold text-center text-[25px]">
        You may also like
      </h1>
      <div className="youMayLike p-[10px] my-[10px] flex flex-col md:flex-row gap-[10px]">
        <ProductCard img={img5} title="xx9 marl i" />
        <ProductCard img={img6} title="xx92 mark v" />
        <ProductCard img={img7} title="xx34 marj 1" />
      </div>
    </>
  );
};

export default YouMayLike;
