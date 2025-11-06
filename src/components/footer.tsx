import { Link } from "react-router-dom";

type footerProps = {
  navigation: any[];
};

const Footer = ({ navigation }: footerProps) => {
  return (
    <footer className="footer px-[10%] py-[20px] bg-[color:var(--black)]">
      <div className="text-[color:var(--white)] flex flex-col md:flex-row gap-2.5 items-center justify-between">
        <h2 className=" font-bold text-[30px] tracking-[1.43px] ">
          audiophile
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-[20px] lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm/6 uppercase font-medium text-[color:var(--white)]"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-3.5 justify-between items-center">
        <div className="text-[color:var(--white)] text-center md:text-left mt-[20px] opacity-[50%] text-[15px] leading-[25px] max-w-[600px]">
          <p className=" my-[15px]">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p>{`Copyright ${new Date().getFullYear()}. All right reserved`}</p>
        </div>
        <div className="text-[color:var(--white)] flex items-center gap-[10px]">
          <i className="fa-brands fa-facebook fa-2x"></i>
          <i className="fa-brands fa-twitter fa-2x"></i>
          <i className="fa-brands fa-instagram fa-2x"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
