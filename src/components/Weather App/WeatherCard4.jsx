import React from "react";

const WeatherCard4 = ({ forecast }) => {
  return (
    <div className='sunrise flex gap-6 items-center py-4 px-7 dark:text-grey-300'>
      <img
        className=' h-[120px] -mx-7 -my-4 invert dark:invert-0 drop-shadow-md'
        src={`https://openweathermap.org/img/wn/${forecast.icon}@4x.png`}
      />

      <div className='flex flex-col justify-between items-center'>
        <p className='text-2xl text-center font-semibold text-purple-700 dark:text-red-500'>
          {forecast.day}
        </p>
        <p className='text-center'>{forecast.date}</p>
        <div className='flex gap-5 w-full justify-between'>
          <p>Min</p>
          <span>{forecast.minTemp}</span>
        </div>
        <div className='flex gap-5 w-full justify-between'>
          <p>Max</p>
          <span>{forecast.maxTemp}</span>
        </div>{" "}
      </div>
    </div>
  );
};

export default WeatherCard4;
