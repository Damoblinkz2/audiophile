import { Link } from "react-router-dom";

type shopCardItemProps = {
  product: string;
  img: string;
};

const ShopCardItem = ({ product, img }: shopCardItemProps) => {
  return (
    <div className="col-span-12 md:col-span-4 relative h-[284px] padding-[30px]">
      <img
        src={`../assets/${img}`}
        className="absolute top-[-2%] left-[50%] z-[5] -translate-x-2/4 "
      />
      <div className="absolute rounded-[10px_10px_0px_0px] flex flex-col z-[1] items-center justify-center gap-[20px] bottom-0 w-[100%] h-[70%] bg-[var(--color2)]">
        <h1 className="font-bold text-[18px] tracking-[1.29px] uppercase">
          {product}
        </h1>
        <Link to={product}>Shop</Link>
      </div>
    </div>
  );
};

export default ShopCardItem;
