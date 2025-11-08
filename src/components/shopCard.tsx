import ShopCardItem from "./shopCardItem";

/**
 * ShopCard component displays a grid of product category cards.
 * Shows three main product categories: headphones, speakers, and earphones.
 */
const ShopCard = () => {
  return (
    <div className="grid grid-cols-12 gap-4 mt-[100px] justify-between items-center">
      {/* Headphones category card */}
      <ShopCardItem product="headphones" img="img-26.png" />

      {/* Speakers category card */}
      <ShopCardItem product="speakers" img="img-27.png" />

      {/* Earphones category card */}
      <ShopCardItem product="earphones" img="img-28.png" />
    </div>
  );
};

export default ShopCard;
