// text-red-600
// text-green-600

import { BsCurrencyDollar } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { Button, SparkLine, Stacked } from "../components";
import { useStateContext } from "../contexts/context-provider";
import { earningData, SparklineAreaData } from "../data/dummy";

export default function Ecommerce() {
  const { currentColor } = useStateContext();

  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-hero-pattern bg-white dark:bg-secondary-dark-bg bg-cover bg-no-repeat bg-center m-3 p-8 pt-9 rounded-xl w-full lg:w-80 h-44 dark:text-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448.78</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="opacity-0.9 hover:drop-shadow-xl p-4 rounded-full text-2xl text-white"
            >
              <BsCurrencyDollar />
            </button>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-1 m-3">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:bg-secondary-dark-bg p-4 pt-9 rounded-2xl md:w-56 dark:text-gray-200"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="opacity-0.9 hover:drop-shadow-xl p-4 rounded-full text-2xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="font-semibold text-lg">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="mt-1 text-gray-400 text-sm">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        <div className="bg-white dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780 dark:text-gray-200">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 hover:drop-shadow-xl text-gray-600">
                <span>
                  <GoDotFill />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 hover:drop-shadow-xl text-green-400">
                <span>
                  <GoDotFill />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-10 mt-10">
            <div className="border-color m-4 pr-10 border-r-1">
              <div>
                <p>
                  <span className="font-semibold text-3xl">$93,438</span>
                  <span className="bg-green-400 hover:drop-shadow-xl ml-3 p-1.5 rounded-full text-white text-xs cursor-pointer">
                    23%
                  </span>
                </p>
                <p className="mt-1 text-gray-500">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="font-semibold text-3xl">$48,438</span>
                </p>
                <p className="mt-1 text-gray-500">Expense</p>
              </div>
              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
