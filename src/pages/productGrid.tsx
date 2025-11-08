/**
 * ProductGrid component displays a grid of products for a specific category.
 * Shows category header, alternating product displays, and shop categories.
 */
import ShopCard from "@/components/shopCard";
import Header from "../components/header";
import ProductDisplay from "../components/productDisplay";

/**
 * Props interface for the ProductGrid component.
 */
type productGridProps = {
  /** The product category name */
  category: string;
  /** Array of products to display */
  products: any[];
};

/**
 * ProductGrid component for displaying products in a category.
 * @param props - The props for the ProductGrid component.
 * @returns The rendered ProductGrid component.
 */
export default function ProductGrid({ category, products }: productGridProps) {
  return (
    <>
      {/* Category header */}
      <Header category={category} />

      <div className="container mx-auto px-[10%]">
        {/* Product list with alternating layout */}
        {products.map((item, index) => (
          <ProductDisplay
            key={index}
            img={item.img}
            name={item.name}
            id={item.id}
            desc={item.desc}
            newProduct={item.newProduct}
            style={
              index % 2 === 0
                ? "flex-col md:flex-row "
                : "flex-col md:flex-row-reverse justify-between"
            }
          />
        ))}

        {/* Shop categories section */}
        <ShopCard />
      </div>
    </>
  );
}
