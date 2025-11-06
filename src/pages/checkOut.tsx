// import { useParams } from "react-router-dom";
import { useContext } from "react";

import MyContext from "@/context/context";
import Button from "@/components/button";
import Input from "@/components/input";
import ProductDescription from "@/components/productDescription";
import ProductDetails from "@/components/productDetails";
import ProductGallery from "@/components/productGallery";
import ShopCard from "@/components/shopCard";
import YouMayLike from "@/components/youMayLike";
import { Link } from "react-router-dom";

type productViewProps = {
  products: any[];
};
export default function CheckOut() {
  //   const { name, price, desc, newProduct, img, gallery, features } =
  //     products.find((p) => p.id === id);

  const goBack = () => {
    window.history.go(-1);
  };

  const context = useContext(MyContext);

  const { cartList } = context || { cartList: [] };

  if (!cartList) return <div>Error: Cant access cart</div>;

  return (
    <div className="flex mt-[100px] mx-auto px-[10%]">
      <div className="bg-[color:var(--color2)] rounded-[5px] grow-[2] p-[20px]">
        <h1 className="uppercase font-bold text-[30px]">Checkout</h1>
        <form>
          <section>
            <h2 className="uppercase font-bold text-[16px] text-[var(--color1)] tracking-[4px] my-[20px]">
              Billing details
            </h2>
            <div className="grid md:grid-cols-[1fr_1fr] grid-cols-[1fr] grid-rows-[1fr_1fr_1fr] md:grid-rows-[1fr_1fr] gap-[10px]">
              <Input _for="Full Name" _type="text" style="" />
              <Input _for="Email" _type="email" style="" />
              <Input _for="Phone Number" _type="tel" style="" />
            </div>
          </section>
          <section>
            <h2 className="uppercase font-bold text-[16px] text-[var(--color1)] tracking-[4px] mt-[20px]">
              shopping info
            </h2>
            <div className="grid md:grid-cols-[1fr_1fr] grid-cols-[1fr] grid-rows-[1fr_1fr_1fr] md:grid-rows-[1fr_1fr] gap-[10px]">
              <Input
                _for="Address"
                _type="text"
                style="md:col-[2_/_span_1] md:row-[1_/_span_2]"
              />
              <Input _for="Zip code" _type="text" style="" />
              <Input _for="City" _type="text" style="" />
              <Input _for="Country" _type="text" style="" />
            </div>
          </section>
          <section>
            <h2 className="uppercase font-bold text-[16px] text-[var(--color1)] tracking-[4px] mt-[20px]">
              payment details
            </h2>
            <div className="grid md:grid-cols-[1fr_1fr] grid-cols-[1fr] grid-rows-[1fr_1fr_1fr] md:grid-rows-[1fr_1fr] gap-[10px]">
              <div>
                <p>payment method</p>
              </div>
              <Input _for="Zip code" _type="text" style="" />
              <Input _for="City" _type="text" style="" />
            </div>
          </section>
        </form>
      </div>
      <div className="grow">
        <h1>summary</h1>
        <div className="bg-[color:var(--transparent-black)] absolute z-[10] w-[100%] h-[100vh] overflow-hidden">
          <div className="bg-[color:var(--white)] float-right w-[370px] z-20 relative mx-0 my-5 p-5 rounded-[5px] right-[10%] ">
            <div className="pb-[15px] border-b-[#e8e8e8] border-b border-solid">
              {`Cart (${cartList.length})`}
              <Button
                style="float-right p-[5px]"
                on_click={}
                label={<span className="lighter-text">Remove all</span>}
              />
            </div>

            {cartList.length === 0 ? (
              <p className="font-bold text-center">The cart is empty</p>
            ) : (
              <>
                <ul className="pt-[20px]">
                  {cartList.map((item) => (
                    // const [quant,setQuant] =useState(item.quantity);
                    <li
                      className="mb-[18px] flex jusify-between items-center gap-2.5"
                      key={item.id}
                    >
                      <div>
                        <img
                          className="float-left mr-3 w-[20%] h-[100%]"
                          src={`../${item.img}`}
                          alt="item1"
                        />
                        <div>
                          <span className="item-name overflow-hidden block pt-[10px] text-[16px] whitespace-nowrap text-ellipsis">
                            {item.name}
                          </span>
                          <span className="item-price text-[red] mr-[8px]">
                            {new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "USD",
                              minimumFractionDigits: 0,
                            }).format(item.price)}
                          </span>
                        </div>
                      </div>

                      <div className="counter flex items-center text-center h-[40px] w-[90px] bg-[var(--color2)]">
                        <Button
                          style="w-[30px]"
                          on_click={() =>
                            // counter === 1 ? setCounter(1) : setCounter(counter - 1)
                            item.quantity--
                          }
                          label={<i className="fa-light fa-minus"></i>}
                        />
                        <span className="w-[30px] font-medium">
                          {item.quantity}
                        </span>
                        <Button
                          style="w-[30px]"
                          // on_click={() => setCounter(counter + 1)}
                          on_click={() => item.quantity++}
                          label={<i className="fa-light fa-plus"></i>}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center font-bold">
                  <p className="">Total</p>
                  <p>
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                    }).format(
                      cartList.reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0,
                      ),
                    )}
                  </p>
                </div>

                <Link
                  to="checkout"
                  className="bg-[color:var(--color1)] hover:bg-[color:var(--color1-light)] text-[var(--white)] text-center block text-base mt-[25px] mb-[15px] mx-0 p-3"
                >
                  CHECKOUT
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
