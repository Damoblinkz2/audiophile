import { useContext } from "react";

import MyContext from "@/context/context";
import Button from "@/components/button";
import Input from "@/components/input";

export default function CheckOut() {
  //   const { name, price, desc, newProduct, img, gallery, features } =
  //     products.find((p) => p.id === id);

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const goBack = () => {
    window.history.go(-1);
  };

  const context = useContext(MyContext);

  const { cartList } = context || { cartList: [] };

  if (!cartList) return <div>Error: Cant access cart</div>;

  const totalPriceOfProduct = cartList.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <>
      <div className="h-[40px] pt-[10px] ">
        <button
          onClick={goBack}
          className="font-bold opacity-[50%] text-[color:var(--black)]"
        >
          Go back
        </button>
      </div>
      <div className="flex flex-col md:flex-row mt-[100px] mx-auto px-[10%] gap-[15px]">
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
                  <Input _type="radio" _for="" style="" />
                </div>
                <Input _for="Zip code" _type="text" style="" />
                <Input _for="City" _type="text" style="" />
              </div>
            </section>
          </form>
        </div>
        <div className="grow bg-[color:var(--color2)] rounded-[5px] p-[20px]">
          <h1 className="uppercase font-bold text-[25px]">summary</h1>
          <div className="">
            {cartList.length === 0 ? (
              <p className="font-bold text-center">The cart is empty</p>
            ) : (
              <>
                <ul className="pt-[20px]">
                  {cartList.map((item) => (
                    // const [quant,setQuant] =useState(item.quantity);
                    <li
                      className="mb-[18px] flex justify-between items-center h-[80px]"
                      key={item.id}
                    >
                      <div className="flex gap[10px] items-center h-[100%] gap-[10px]">
                        <div className="w-[40%] h-[100%]">
                          <img
                            className="h-[100%]"
                            src={`../${item.img}`}
                            alt="item1"
                          />
                        </div>
                        <div className="h-[100%]">
                          <span className="overflow-hidden block pt-[10px] text-[16px] whitespace-nowrap text-ellipsis">
                            {item.name}
                          </span>
                          <span className="text-[red] mr-[8px]">
                            {formatAmount(item.price)}
                          </span>
                        </div>
                      </div>

                      <div className="counter flex justify-center items-center h-[100%]">
                        <span className="w-[30px] font-medium">
                          {`X${item.quantity}`}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center font-bold">
                  <p className="uppercase">Total</p>
                  <p>{formatAmount(totalPriceOfProduct)}</p>
                </div>
                <div className="flex justify-between items-center font-bold">
                  <p className="uppercase">Shipping</p>
                  <p>{formatAmount(50)}</p>
                </div>
                <div className="flex justify-between items-center font-bold">
                  <p className="uppercase">Vat (included)</p>
                  <p>{formatAmount(totalPriceOfProduct * 0.1)}</p>
                </div>
                <br />
                <div className="flex justify-between items-center font-bold">
                  <p className="uppercase">grand total</p>
                  <p className="text-[var(--color1)]">
                    {formatAmount(
                      totalPriceOfProduct + totalPriceOfProduct * 0.1,
                    ) + 50}
                  </p>
                </div>

                <Button
                  style="bg-[color:var(--color1)] text-[var(--white)] hover:bg-[color:var(--color1-light)] w-[100%] mt-[25px] h-[48px]"
                  label="PAY"
                  on_click={goBack}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
