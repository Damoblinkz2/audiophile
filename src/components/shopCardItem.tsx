/**
 * ShopCardItem component displays a product category card with image and link.
 * Used in the shop categories section to navigate to product grids.
 */
import { Link } from "react-router-dom";

/**
 * Props interface for the ShopCardItem component.
 */
type shopCardItemProps = {
  /** The product category name */
  product: string;
  /** The image filename for the category */
  img: string;
};

/**
 * ShopCardItem component for displaying product category cards.
 * @param props - The props for the ShopCardItem component.
 * @returns The rendered ShopCardItem component.
 */
const ShopCardItem = ({ product, img }: shopCardItemProps) => {
  return (
    <div className="col-span-12 md:col-span-4 relative h-[284px] padding-[30px]">
      {/* Category image positioned absolutely */}
      <img
        src={`../assets/${img}`}
        className="absolute top-[-2%] left-[50%] z-[5] -translate-x-2/4 "
        alt={product}
      />

      {/* Card background with title and link */}
      <div className="absolute rounded-[10px_10px_0px_0px] flex flex-col z-[1] items-center justify-center gap-[20px] bottom-0 w-[100%] h-[70%] bg-[var(--color2)]">
        <h1 className="font-bold text-[18px] tracking-[1.29px] uppercase">
          {product}
        </h1>
        <Link to={`../${product}`} className="hover:text-[var(--color1)]">
          Shop<i className="fa-light fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default ShopCardItem;
