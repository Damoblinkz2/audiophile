/**
 * ProductDescription component displays product features and what's included in the box.
 * Shows detailed description and accessories list for a product.
 */
type productDescriptionProps = {
  /** Object containing product features and included items */
  features: any;
};

/**
 * ProductDescription component for displaying product details.
 * @param props - The props for the ProductDescription component.
 * @returns The rendered ProductDescription component.
 */
const ProductDescription = ({ features }: productDescriptionProps) => {
  const { desc, in_box } = features;

  return (
    <div className="productDescription px-[20px] py-[30px] my-[30px] flex flex-col md:flex-row gap-3.5 justify-between">
      {/* Features section */}
      <div>
        <h1 className="mb-4 h-[36px] font-bold text-[32px] leading-[36px] tracking-[1.14px] uppercase ">
          Features
        </h1>
        <p className="text-[15px] leading-[25px] max-w-[650px] text-[color:var(--black)] opacity-[50%]">
          {desc}
        </p>
      </div>

      {/* What's in the box section */}
      <div>
        <h1 className="mb-4 h-[36px] font-bold text-[32px] leading-[36px] tracking-[1.14px] uppercase ">
          In the box
        </h1>
        <ul className="text-[15px] leading-[25px]">
          {in_box.map((item: { quantity: number; stuff: string }) => (
            <li key={item.stuff}>
              <p className="font-medium">
                <span className="opacity-[100%] text-[color:var(--color1)]">{`${item.quantity}X  `}</span>
                <span className="opacity-[50%] text-[color:var(--black)]">
                  {item.stuff}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDescription;
