import React from "react";

export const Container = ({ children }) => {
  return (
    <div className='bg-gray-100 dark:bg-grey-900 rounded-xl overflow-hidden shadow-md w-fit'>
      {children}
    </div>
  );
};
