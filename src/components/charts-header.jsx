export const ChartsHeader = ({ category, title }) => (
  <div className="mb-10">
    <div>
      <p className="text-gray-400 text-lg">Chart</p>
      <p className="font-extrabold text-3xl text-slate-900 dark:text-gray-200 tracking-tight">
        {category}
      </p>
    </div>
    <p className="mt-3 mb-2 text-center text-xl dark:text-gray-200">{title}</p>
  </div>
);

import PropTypes from "prop-types";

ChartsHeader.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
