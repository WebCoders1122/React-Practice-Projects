import React from "react";

const WeatherCard5 = ({ forecast }) => {
  return (
    <div className='sunrise flex flex-col justify-between items-center py-2 px-4 dark:text-grey-300'>
      <p className='text-xl mt-2 text-center font-semibold text-purple-700 dark:text-red-500'>
        {forecast.time}
      </p>
      <img
        className=' h-[120px] -my-4 drop-shadow-md'
        src={`https://openweathermap.org/img/wn/${forecast.icon}@4x.png`}
      />
      <p className='-mt-1 font-semibold text-lg'>
        {forecast.temperature} &deg;C
      </p>
    </div>
  );
};

export default WeatherCard5;
