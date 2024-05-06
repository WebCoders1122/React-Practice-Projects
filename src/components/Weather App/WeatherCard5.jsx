import React from "react";
import { FiSunrise } from "react-icons/fi";

const WeatherCard5 = () => {
  return (
    <div className='sunrise flex flex-col justify-between items-center py-2 px-7 dark:text-grey-300'>
      <FiSunrise
        className='mt-1'
        size={70}
      />
      <p className='text-xl mt-2 text-center font-semibold text-purple-700 dark:text-red-500'>
        07:00 AM
      </p>
      <p className='-mt-1'>15 C</p>
    </div>
  );
};

export default WeatherCard5;
