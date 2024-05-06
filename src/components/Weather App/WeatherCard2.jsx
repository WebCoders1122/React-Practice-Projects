import React from "react";
import { FiSunrise, FiSunset } from "react-icons/fi";

const WeatherCard2 = () => {
  return (
    <div className=' flex flex-col justify-between py-2 px-6 pr-10 max-w-sm dark:text-white'>
      {/* Parameters */}
      <div>
        <div className='flex gap-5 w-full justify-between'>
          <p>Wind</p>
          <span>0/10</span>
        </div>
        <div className='flex gap-5 w-full justify-between'>
          <p>Humidity</p>
          <span>0/10</span>
        </div>
        <div className='flex gap-5 w-full justify-between'>
          <p>Pressure</p>
          <span>0/10</span>
        </div>
        <div className='flex gap-5 w-full justify-between'>
          <p>Dew Piont</p>
          <span>0/10</span>
        </div>
      </div>
      {/* logos */}
      <div className='flex gap-5'>
        <div className='sunrise flex flex-col items-center'>
          <p className='text-xl'>07:24</p>
          <FiSunrise size={60} />
        </div>
        <div className='sunset flex flex-col items-center'>
          <p className='text-xl'>05:55</p>
          <FiSunset size={60} />
        </div>
      </div>
    </div>
  );
};

export default WeatherCard2;
