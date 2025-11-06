import { Link } from "react-router-dom";

type productDisplayProps = {
  style: string;
  img: string;
  name: string;
  desc: string;
  id: string;
  newProduct: boolean;
};

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
      <div className="h-[400px]">
        <img src={img} className="object-contain h-[100%]" />
      </div>
      <div className="p-[35px] max-w-[450px]">
        {newProduct && (
          <h4 className="mb-3 uppercase tracking-[7px] font-[400] text-[color:var(--color1)]">
            new product
          </h4>
        )}
        <h1 className="mb-4 font-bold text-[40px] leading-[44px] tracking-[1.43px] uppercase ">
          {name}
        </h1>
        <p className="text-[15px] leading-[25px] opacity-[50%] text-[color:var(--black)]">
          {desc}
        </p>

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
