import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { MdOutlineCancel } from "react-icons/md";
import { SiShopware } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";

import { useStateContext } from "../contexts/context-provider";
import { links } from "../data/dummy";

export const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 pb-10 h-screen overflow-auto md:overflow-hidden md:hover:overflow-auto">
      {activeMenu ? (
        <>
          <div className="flex justify-between items-center">
            <Link
              to={"/"}
              onClick={handleCloseSideBar}
              className="flex items-center gap-3 mt-4 ml-3 font-extrabold text-slate-900 text-xl dark:text-white tracking-tight"
            >
              <SiShopware /> <span>Shoppy</span>
            </Link>
            <TooltipComponent content={"Menu"} position="BottomCenter">
              <button
                type="button"
                onClick={() =>
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
                className="block md:hidden hover:bg-light-gray mt-4 p-3 rounded-full text-xl"
                style={{ color: currentColor }}
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item, index) => (
              <div key={item + index}>
                <p className="m-3 mt-4 text-gray-400 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
