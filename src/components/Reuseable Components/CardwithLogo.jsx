import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { useSelector } from "react-redux";

const CardwithLogo = () => {
  const { cityName, country, day, temperature, weatherDesc, icon } =
    useSelector((state) => state.weather.cityWeatherData);
  return (
    <div className=' flex flex-col py-2 px-5 max-w-sm'>
      {/* day and date */}
      <div className='mt-2'>
        <h5 className='mb-2 text-purple-500 text-5xl font-semibold tracking-tight  dark:text-red-500'>
          {cityName + ", " + country}
        </h5>
        <p className='text-lg dark:text-grey-200'>{day}</p>
      </div>
      {/* conditions and logo */}
      <div className='flex items-end justify-around gap-2'>
        <div className='mb-3'>
          <h5 className=' text-purple-500 text-3xl font-semibold tracking-tight  dark:text-red-500'>
            {temperature} &deg;C
          </h5>
          <p className='dark:text-grey-200 uppercase'>{weatherDesc}</p>
        </div>
        <img
          className='h-[200px] w-[200px] -m-8'
          src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
          alt='Weather_icon'
        />
      </div>
    </div>
  );
};

export default CardwithLogo;
