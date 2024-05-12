import React from "react";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { useSelector } from "react-redux";

const WeatherCard2 = () => {
  const { humidity, sunrise, sunset, feelsLike, pressure, windSpeed } =
    useSelector((state) => state.weather.cityWeatherData);
  return (
    <div className=' flex flex-col justify-around py-2 px-3 pr-5 max-w-sm dark:text-white'>
      {/* Parameters */}
      <div>
        <div className='flex gap-5 w-full justify-between'>
          <p>Wind Speed</p>
          <span>{(windSpeed * 3.6).toFixed(2)} Km/h</span>
        </div>
        <div className='flex gap-5 w-full justify-between'>
          <p>Humidity</p>
          <span>{humidity} %</span>
        </div>
        <div className='flex gap-5 w-full justify-between'>
          <p>Pressure</p>
          <span>{(pressure / 1000).toFixed(2)} BAR</span>
        </div>
        <div className='flex gap-5 w-full justify-between'>
          <p>Feels Like</p>
          <span>{feelsLike} &deg;C</span>
        </div>
      </div>
      {/* logos */}
      <div className='flex gap-5'>
        <div className='sunrise flex flex-col items-center'>
          <p className='text-xl text-center'>{sunrise}</p>
          <FiSunrise size={60} />
        </div>
        <div className='sunset flex flex-col items-center'>
          <p className='text-xl text-center'>{sunset}</p>
          <FiSunset size={60} />
        </div>
      </div>
    </div>
  );
};

export default WeatherCard2;
