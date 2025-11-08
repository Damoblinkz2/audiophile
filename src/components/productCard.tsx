/**
 * ProductCard component displays a product preview with image, title, and link.
 * Used in product grids and related product sections.
 */
import { Link } from "react-router-dom";

/**
 * Props interface for the ProductCard component.
 */
type productCardProps = {
  /** Image source path for the product */
  img: string;
  /** Product title/name */
  title: string;
  /** Route path to navigate to when clicked */
  to: string;
};

/**
 * ProductCard component for displaying product previews.
 * @param props - The props for the ProductCard component.
 * @returns The rendered ProductCard component.
 */
const ProductCard = ({ img, title, to }: productCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center mb-[40px]">
      {/* Product image */}
      <div>
        <img src={img} className="object-cover h-[100%]" alt={title} />
      </div>

      {/* Product title */}
      <h2 className="uppercase font-bold h-[23px] text-[24px] tracking-[1.7px] my-[20px]">
        {title}
      </h2>

      {/* See product link */}
      <Link
        to={to}
        className="bg-[color:var(--color1)] hover:bg-[color:var(--color1-light)] text-[var(--white)] text-center block text-base mt-[25px] mb-[15px] mx-0 p-3"
      >
        SEE PRODUCT
      </Link>
    </div>
  );
};

export default ProductCard;
