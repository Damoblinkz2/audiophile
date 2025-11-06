import ShopCardItem from "./shopCardItem";

const ShopCard = () => {
  return (
    <div className="grid grid-cols-12 gap-4 mt-[100px] justify-between items-center">
      <ShopCardItem product="headphones" img="img-26.png" />
      <ShopCardItem product="speakers" img="img-27.png" />
      <ShopCardItem product="earphones" img="img-28.png" />
    </div>
  );
};

export default ShopCard;
