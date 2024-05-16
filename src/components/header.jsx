import PropTypes from "prop-types";

export const Header = ({ category, title }) => {
  return (
    <div className="mb-10">
      <p className="text-gray-400 text-lg">{category}</p>

      <p className="font-extrabold text-3xl text-slate-900 tracking-tight">
        {title}
      </p>
    </div>
  );
};

Header.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
