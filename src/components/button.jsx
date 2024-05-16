import PropTypes from "prop-types";
import { useStateContext } from "../contexts/context-provider";

export const Button = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
}) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.node,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  bgHoverColor: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string,
  borderRadius: PropTypes.string,
  width: PropTypes.string,
};
