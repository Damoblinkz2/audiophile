import Button from "./button";

type productCardProps = {
  img: string;
  title: string;
};

const ProductCard = ({ img, title }: productCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center mb-[40px]">
      <div>
        <img src={img} className="object-cover h-[100%]" />
      </div>
      <h2 className="uppercase font-bold h-[23px] text-[24px] tracking-[1.7px] my-[20px]">
        {title}
      </h2>
      <Button
        label="SEE PRODUCT"
        on_click={() => {}}
        style="bg-[color:var(--color1)] text-[var(--white)] hover:bg-[color:var(--color1-light)] w-[160px] h-[48px]"
      />
    </div>
  );
};

export default ProductCard;
