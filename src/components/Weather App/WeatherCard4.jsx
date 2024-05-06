import React from "react";
import { FiSunrise, FiSunset } from "react-icons/fi";

const WeatherCard4 = () => {
  return (
    <div className='sunrise flex gap-5 items-center py-5 px-6 dark:text-grey-300'>
      <FiSunrise size={80} />
      <div className='flex flex-col justify-between items-center'>
        <p className='text-xl text-center font-semibold text-purple-700 dark:text-red-500'>
          Sunday
        </p>
        <p className='text-center text-sm'>April 21, 2024</p>
        <div className='flex gap-5 w-full justify-between'>
          <p>Wind</p>
          <span>0/10</span>
        </div>
        <div className='flex gap-5 w-full justify-between'>
          <p>Wind</p>
          <span>0/10</span>
        </div>{" "}
      </div>
    </div>
  );
};

export default WeatherCard4;
