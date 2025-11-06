import ProductCard from "./productCard";

const YouMayLike = () => {
  return (
    <>
      <h1 className="uppercase font-bold text-center text-[25px]">
        You may also like
      </h1>
      <div className="youMayLike p-[10px] my-[10px] flex flex-col md:flex-row gap-[10px]">
        <ProductCard img="./assets/img-5.png" title="xx9 marl i" />
        <ProductCard img="./assets/img-6.png" title="xx92 mark v" />
        <ProductCard img="./assets/img-7.png" title="xx34 marj 1" />
      </div>
    </>
  );
};

export default YouMayLike;
