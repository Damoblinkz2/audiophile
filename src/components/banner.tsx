const Banner = () => {
  return (
    <div className="banner p-[20px] my-[30px] flex flex-col-reverse md:flex-row gap-2.5 items-center justify-between">
      <div className="p-[15px] max-w-[450px]">
        <h1 className="mb-4 font-bold text-[40px] leading-[44px] tracking-[1.43px] uppercase ">
          bringing you the{" "}
          <span className="text-[color:var(--color1)]">best</span> audio gear
        </h1>
        <p className="text-[15px] leading-[25px] text-[color:var(--black)] opacity-[50%]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="h-[400px]">
        <img src="./assets/img-8.png" className="object-contain h-[100%]" />
      </div>
    </div>
  );
};

export default Banner;
