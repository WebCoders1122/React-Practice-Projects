import React from "react";

const Squares = ({ value = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className=' flex justify-center items-center w-20 h-20 text-purple-700 text-7xl font-semibold bg-gray-100 dark:text-red-600 dark:bg-grey-500 rounded-md shadow border border-gray-300 dark:border-grey-900'>
      {value}
    </button>
  );
};

export default Squares;
