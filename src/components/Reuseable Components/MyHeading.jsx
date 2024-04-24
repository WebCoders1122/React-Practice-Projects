import React from "react";
import { Children } from "react";

const MyHeading = ({ children }) => {
  return (
    <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-purple-700 md:text-5xl lg:text-5xl dark:text-white'>
      {children}
    </h1>
  );
};

export default MyHeading;
