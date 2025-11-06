import { Link } from "react-router-dom";

type productCardProps = {
  img: string;
  title: string;
  to: string;
};

const ProductCard = ({ img, title, to }: productCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center mb-[40px]">
      <div>
        <img src={img} className="object-cover h-[100%]" />
      </div>
      <h2 className="uppercase font-bold h-[23px] text-[24px] tracking-[1.7px] my-[20px]">
        {title}
      </h2>
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
