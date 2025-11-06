import { useParams } from "react-router-dom";

import ProductDescription from "@/components/productDescription";
import ProductDetails from "@/components/productDetails";
import ProductGallery from "@/components/productGallery";
import ShopCard from "@/components/shopCard";
import YouMayLike from "@/components/youMayLike";

type productViewProps = {
  products: any[];
};
export default function ProductView({ products }: productViewProps) {
  const { id } = useParams();

  const { name, price, desc, newProduct, img, gallery, features } =
    products.find((p) => p.id === id);

  const goBack = () => {
    window.history.go(-1);
  };

  return (
    <>
      <div className="container mx-auto mt-[80px] px-[10%]">
        <div className="h-[40px] pt-[10px] ">
          <button
            onClick={goBack}
            className="font-bold opacity-[50%] text-[color:var(--black)]"
          >
            Go back
          </button>
        </div>
        <ProductDetails
          id={id}
          name={name}
          price={price}
          desc={desc}
          newProduct={newProduct}
          img={img}
        />
        <ProductDescription features={features} />
        <ProductGallery gallery={gallery} />
        <YouMayLike />
        <ShopCard />
      </div>
    </>
  );
}
