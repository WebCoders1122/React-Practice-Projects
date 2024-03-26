import React from "react";

const MyButton = ({ color = "violet", text = "Button", onClick }) => {
  return (
    <button
      onClick={onClick}
      type='button'
      className={`text-white font-semibold bg-gradient-to-r ${
        color == "violet"
          ? "from-violet-400 via-violet-600 to-violet-700"
          : "from-gray-400 via-gray-600 to-gray-700"
      } hover:bg-gradient-to-br focus:ring-4 focus:outline-none ${
        color == "violet"
          ? "focus:ring-violet-400 dark:focus:ring-violet-900"
          : "focus:ring-gray-400 dark:focus:ring-gray-900"
      } rounded-lg text-sm px-5 py-2 text-center me-2`}>
      {text}
    </button>
  );
};

export default MyButton;
