import { useParams } from "react-router-dom";

import ProductDescription from "@/components/productDescription";
import ProductDetails from "@/components/productDetails";
import ProductGallery from "@/components/productGallery";
import ShopCard from "@/components/shopCard";
import YouMayLike from "@/components/youMayLike";

/**
 * Props interface for the ProductView component.
 */
type productViewProps = {
  /** Array of all products available in the store */
  products: any[];
};

/**
 * ProductView component displays detailed information about a specific product.
 * Retrieves product data based on the URL parameter and renders various product-related components.
 * @param props - The props for the ProductView component.
 * @returns The rendered ProductView component.
 */
export default function ProductView({ products }: productViewProps) {
  // Get the product ID from the URL parameters
  const { id } = useParams();

  // Find the product matching the ID from the products array
  const { name, price, desc, newProduct, img, gallery, features } =
    products.find((p) => p.id === id);

  /**
   * Navigates back to the previous page.
   */
  const goBack = () => {
    window.history.go(-1);
  };

  return (
    <>
      <div className="container mx-auto mt-[80px] px-[10%]">
        {/* Go back button */}
        <div className="h-[40px] pt-[10px] ">
          <button
            onClick={goBack}
            className="font-bold opacity-[50%] text-[color:var(--black)]"
          >
            Go Back
          </button>
        </div>

        {/* Product details section */}
        <ProductDetails
          id={id}
          name={name}
          price={price}
          desc={desc}
          newProduct={newProduct}
          img={img}
        />

        {/* Product features and description */}
        <ProductDescription features={features} />

        {/* Product image gallery */}
        <ProductGallery gallery={gallery} />

        {/* You may also like section */}
        <YouMayLike />

        {/* Shop by category cards */}
        <ShopCard />
      </div>
    </>
  );
}
