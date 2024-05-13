import React from "react";

const Loading = () => {
  return (
    <div className='flex items-center grow justify-center mx-auto px-12 h-60 border border-gray-200 rounded-lg bg-gray-50 dark:bg-grey-800 dark:border-gray-700 ease-linear duration-300'>
      <div className='px-3 py-1 text-2xl font-medium leading-none text-center text-purple-800 bg-purple-200 rounded-full animate-pulse dark:bg-grey-900 dark:text-red-200'>
        loading...
      </div>
    </div>
  );
};

export default Loading;
