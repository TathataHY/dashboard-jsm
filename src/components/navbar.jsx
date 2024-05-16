import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import PropTypes from "prop-types";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiNotification3Line } from "react-icons/ri";
import { useStateContext } from "../contexts/context-provider";
import { Cart, Chat, Notification, UserProfile } from "./";

import { useEffect } from "react";
import avatar from "../data/avatar.jpg";

export const Navbar = () => {
  const {
    setActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
    activeMenu,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="relative flex justify-between md:mx-6 p-2">
      <NavButton
        title="Menu"
        customFunction={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        <NavButton
          title="Cart"
          customFunction={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunction={() => handleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notifications"
          dotColor="rgb(254, 201, 15)"
          customFunction={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />

        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 hover:bg-light-gray p-1 rounded-lg cursor-pointer"
            onClick={() => handleClick("userProfile")}
          >
            <img className="rounded-full w-8 h-8" src={avatar} alt="profile" />
            <p>
              <span className="text-14 text-gray-400">Hi, </span>{" "}
              <span className="ml-1 font-bold text-14 text-gray-400">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-14 text-gray-400" />
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

const NavButton = ({ title, customFunction, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunction}
      style={{ color }}
      className="relative hover:bg-light-gray p-3 rounded-full text-xl"
    >
      <span
        style={{ background: dotColor }}
        className="inline-flex top-2 right-2 absolute rounded-full w-2 h-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

NavButton.propTypes = {
  title: PropTypes.string,
  customFunction: PropTypes.func,
  icon: PropTypes.node,
  color: PropTypes.string,
  dotColor: PropTypes.string,
};
