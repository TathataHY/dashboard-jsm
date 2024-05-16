import { MdOutlineCancel } from "react-icons/md";

import { Button } from ".";
import { useStateContext } from "../contexts/context-provider";
import avatar from "../data/avatar.jpg";
import { userProfileData } from "../data/dummy";

export const UserProfile = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="top-16 right-1 absolute bg-white dark:bg-[#42464D] p-8 rounded-lg w-96 nav-item">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex items-center gap-5 border-color mt-6 pb-6 border-b-1">
        <img
          className="rounded-full w-24 h-24"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">
            {" "}
            Michael Roberts{" "}
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            {" "}
            Administrator{" "}
          </p>
          <p className="font-semibold text-gray-500 text-sm dark:text-gray-400">
            {" "}
            info@shop.com{" "}
          </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div
            key={index}
            className="flex gap-5 border-color hover:bg-light-gray dark:hover:bg-[#42464D] p-4 border-b-1 cursor-pointer"
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="hover:bg-light-gray p-3 rounded-lg text-xl"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-gray-200">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {" "}
                {item.desc}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>
  );
};
