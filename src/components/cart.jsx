import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";

import { Button } from ".";
import { useStateContext } from "../contexts/context-provider";
import { cartData } from "../data/dummy";

export const Cart = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="top-0 right-0 fixed bg-half-transparent w-full nav-item">
      <div className="float-right bg-white dark:bg-[#484B52] p-8 md:w-400 h-screen dark:text-gray-200 transition-all duration-1000 ease-in-out">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Shopping Cart</p>
          <Button
            icon={<MdOutlineCancel />}
            color="rgb(153, 171, 180)"
            bgHoverColor="light-gray"
            size="2xl"
            borderRadius="50%"
          />
        </div>
        {cartData?.map((item, index) => (
          <div key={index}>
            <div>
              <div className="flex items-center gap-5 border-color dark:border-gray-600 p-4 border-b-1 leading-8">
                <img className="rounded-lg w-24 h-80" src={item.image} alt="" />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="font-semibold text-gray-600 text-sm dark:text-gray-400">
                    {item.category}
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <p className="font-semibold text-lg">{item.price}</p>
                    <div className="flex items-center border-1 border-color border-r-0 rounded">
                      <p className="border-color dark:border-gray-600 p-2 border-r-1 text-red-600">
                        <AiOutlineMinus />
                      </p>
                      <p className="border-color dark:border-gray-600 p-2 border-r-1 text-green-600">
                        0
                      </p>
                      <p className="border-color dark:border-gray-600 p-2 border-r-1 text-green-600">
                        <AiOutlinePlus />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-3 mb-3">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
            <p className="font-semibold">$890</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">Total</p>
            <p className="font-semibold">$890</p>
          </div>
        </div>
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="Place Order"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};
