// import { useMutation, useQuery } from "convex/react";
// import { api } from "../convex/_generated/api";
import ShopCard from "@/components/shopCard";
import Header from "../components/header";
// import YouMayLike from "./components/youMayLike";
// import Banner from "./components/banner";
import ProductDisplay from "../components/productDisplay";
// import ProductDescription from "./components/productDescription";s
// import ProductGallery from "./components/productGallery";
// import Example from "./components/hero";
// import ProductDetails from "./components/productDetails";

type productGridProps = {
  category: string;
  products: any[];
};
export default function ProductGrid({ category, products }: productGridProps) {
  return (
    <>
      <Header category={category} />
      <div className="container mx-auto px-[10%]">
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
        <ShopCard />
      </div>
    </>
  );
}
