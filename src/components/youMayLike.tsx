import ProductCard from "./productCard";

const YouMayLike = () => {
  return (
    <>
      <h1 className="uppercase font-bold text-center text-[25px]">
        You may also like
      </h1>
      <div className="youMayLike p-[10px] my-[10px] flex flex-col md:flex-row gap-[10px]">
        <ProductCard
          img="../assets/img-5.png"
          title="xx99 mark i"
          to="../headphones/xx99-mark-i-headphones"
        />
        <ProductCard
          img="../assets/img-6.png"
          title="xx59 mark v"
          to="../headphones/xx59-headphones"
        />
        <ProductCard
          img="../assets/img-7.png"
          title="zx9 speaker"
          to="../speakers/zx9-speaker"
        />
      </div>
    </>
  );
};

export default YouMayLike;
