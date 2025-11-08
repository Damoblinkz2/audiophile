/**
 * Props interface for the ProductGallery component.
 */
type productGalleryProps = {
  /** Array of image paths for the product gallery */
  gallery: any[];
};

/**
 * ProductGallery component displays a grid of product images.
 * Arranges images in a responsive grid layout with special positioning for even-indexed items.
 * @param props - The props for the ProductGallery component.
 * @returns The rendered ProductGallery component.
 */
const ProductGallery = ({ gallery }: productGalleryProps) => {
  return (
    <div className="productGallery p-[20px] mt-[20px] mb-[40px] grid md:grid-cols-[1fr_1.5fr] grid-cols-[1fr] grid-rows-[1fr_1fr_1fr] md:grid-rows-[1fr_1fr] gap-[10px]">
      {gallery.map((item, index) => (
        <div
          key={index}
          className={
            (index + 1) % 2 === 0
              ? "md:col-[2_/_span_1] md:row-[1_/_span_2]"
              : ""
          }
        >
          <img
            src={`../${item}`}
            className="object-cover h-[100%]"
            alt={`Product gallery image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductGallery;
