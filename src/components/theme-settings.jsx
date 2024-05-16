import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { BsCheck } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";

import { useStateContext } from "../contexts/context-provider";
import { themeColors } from "../data/dummy";

export const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    useStateContext();

  return (
    <div className="top-0 right-0 fixed bg-half-transparent w-screen nav-item">
      <div className="float-right bg-white dark:bg-[#484B52] w-400 h-screen dark:text-gray-200">
        <div className="flex justify-between items-center ml-4 p-4">
          <p className="font-semibold text-lg">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            className="hover:bg-light-gray hover:drop-shadow-xl p-3 text-2xl"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col border-color ml-4 p-4 border-t-1">
          <p className="font-semibold text-xl">Theme Option</p>

          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Light"}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>
          <div className="mt-2">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              onChange={setMode}
              className="cursor-pointer"
              checked={currentMode === "Dark"}
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>
        <div className="border-color ml-4 p-4 border-t-1">
          <p className="font-semibold text-xl">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div
                  className="relative flex items-center gap-5 mt-2 cursor-pointer"
                  key={item.name}
                >
                  <button
                    type="button"
                    className="rounded-full w-10 h-10 cursor-pointer"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        item.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
