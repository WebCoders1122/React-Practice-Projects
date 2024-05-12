import React from "react";
import { useSelector } from "react-redux";

const WeatherCard3 = ({ day, data }) => {
  const { maxTemp, minTemp, weatherDesc, icon } = data();
  return (
    <div className=' flex flex-col items-center py-2 px-8 w-fit'>
      {/* day and date */}
      <h5 className='mb-2 text-purple-500 text-4xl text-center font-semibold tracking-tight  dark:text-red-500 uppercase'>
        {day}
      </h5>
      <p className='dark:text-grey-200 text-xl uppercase'>{weatherDesc}</p>
      <img
        className='-m-8 w-[140px] h-[140px]'
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt=''
      />
      {/* conditions and logo */}
      <div>
        <div className='flex items-end justify-between gap-14'>
          <h5 className=' text-purple-500 text-2xl font-semibold tracking-tight  dark:text-red-500'>
            Max Temp:
          </h5>
          <span className='text-lg dark:text-grey-300 font-semibold'>
            {maxTemp} &deg;C
          </span>
        </div>
        <div className='flex items-end justify-between'>
          <h5 className=' text-purple-500 text-2xl font-semibold tracking-tight  dark:text-red-500'>
            Min Temp:
          </h5>
          <span className='text-lg dark:text-grey-300 font-semibold'>
            {minTemp} &deg;C
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard3;
