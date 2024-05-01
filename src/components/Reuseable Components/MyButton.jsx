import React from "react";

const MyButton = ({ nav = null, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      type='button'
      className={`focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 ${
        nav ? "py-1.5" : "py-2"
      } dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900`}>
      {children ? children : "Button"}
    </button>
  );
};

export default MyButton;
