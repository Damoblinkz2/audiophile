/**
 * ProductDisplay component shows a detailed product preview with image and description.
 * Used for featured products or category highlights with optional "new product" badge.
 */
import { Link } from "react-router-dom";

/**
 * Props interface for the ProductDisplay component.
 */
type productDisplayProps = {
  /** Additional CSS classes for styling */
  style: string;
  /** Product image source path */
  img: string;
  /** Product name/title */
  name: string;
  /** Product description text */
  desc: string;
  /** Product ID/route path */
  id: string;
  /** Whether to show "new product" badge */
  newProduct: boolean;
};

/**
 * ProductDisplay component for detailed product showcases.
 * @param props - The props for the ProductDisplay component.
 * @returns The rendered ProductDisplay component.
 */
const ProductDisplay = ({
  style,
  img,
  name,
  id,
  desc,
  newProduct,
}: productDisplayProps) => {
  return (
    <div
      className={`productDetails p-[20px] my-[30px] flex gap-2.5 ${style} items-center`}
    >
      {/* Product image */}
      <div className="h-[400px]">
        <img src={img} className="object-contain h-[100%]" alt={name} />
      </div>

      {/* Product information */}
      <div className="p-[35px] max-w-[450px]">
        {/* New product badge (conditional) */}
        {newProduct && (
          <h4 className="mb-3 uppercase tracking-[7px] font-[400] text-[color:var(--color1)]">
            new product
          </h4>
        )}

        {/* Product name */}
        <h1 className="mb-4 font-bold text-[40px] leading-[44px] tracking-[1.43px] uppercase ">
          {name}
        </h1>

        {/* Product description */}
        <p className="text-[15px] leading-[25px] opacity-[50%] text-[color:var(--black)]">
          {desc}
        </p>

        {/* See product button */}
        <div className="mt-5">
          <Link
            className=" bg-[var(--color1)] block pt-[12px] hover:bg-[var(--color1-light)] text-center p-[auto] text-[color:var(--white)] w-[160px] h-[48px]"
            to={id}
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
