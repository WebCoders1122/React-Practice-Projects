import React from "react";

const LogoCard = () => {
  return (
    <div className='flex flex-col max-w-md mx-auto justify-center items-center shadow-md bg-gray-50 dark:bg-grey-900 rounded-lg my-4 overflow-hidden'>
      <div className='logo max-w-60 '>
        <img
          src='public/logos/logo-1.png'
          alt='logo-1'
        />
      </div>
      <div className='body py-2 px-5 border-t border-t-purple-700 dark:border-t-red-500'>
        <h2 className='text-2xl font-semibold text-purple-700 dark:text-red-500'>
          This is logo Heading...!!!
        </h2>
        <p className='text-gray-500 text-sm dark:text-grey-400 mt-1 mb-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          pariatur expedita officia voluptas aliquam voluptatibus?
        </p>
      </div>
    </div>
  );
};

export default LogoCard;
