import React from "react";
import { Children } from "react";

const MyHeading2 = ({ children }) => {
  return (
    <h1 className='text-4xl font-extrabold leading-none tracking-tight text-purple-700 md:text-5xl lg:text-4xl dark:text-red-500'>
      {children}
    </h1>
  );
};

export default MyHeading2;
