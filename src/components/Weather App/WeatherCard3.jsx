import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";

const WeatherCard3 = () => {
  return (
    <div className=' flex flex-col py-2 px-9 w-fit'>
      {/* day and date */}
      <h5 className='mb-2 text-purple-500 text-4xl text-center font-semibold tracking-tight  dark:text-red-500'>
        Today
      </h5>
      {/* conditions and logo */}
      <div className='flex items-end justify-between gap-14'>
        <div className='mb-3'>
          <h5 className=' text-purple-500 text-4xl font-semibold tracking-tight  dark:text-red-500'>
            22 C
          </h5>
          <p className='dark:text-grey-200 text-xl'>Patrially Cloudy</p>
        </div>
        <TiWeatherPartlySunny
          className='dark:text-grey-50'
          size={70}
        />
      </div>
      <div className='flex items-end justify-between gap-8'>
        <div className='mb-3'>
          <h5 className=' text-purple-500 text-4xl font-semibold tracking-tight  dark:text-red-500'>
            22 C
          </h5>
          <p className='dark:text-grey-200 text-xl'>Patrially Cloudy</p>
        </div>
        <TiWeatherPartlySunny
          className='dark:text-grey-50'
          size={70}
        />
      </div>
    </div>
  );
};

export default WeatherCard3;
