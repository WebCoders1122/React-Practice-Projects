import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";

const CardwithLogo = ({ day, date, temp, condition }) => {
  return (
    <div className=' flex flex-col py-2 px-10 max-w-sm'>
      {/* day and date */}
      <div className='mt-2'>
        <h5 className='mb-2 text-purple-500 text-5xl font-semibold tracking-tight  dark:text-red-500'>
          {day}
        </h5>
        <p className='text-lg dark:text-grey-200'>{date}</p>
      </div>
      {/* conditions and logo */}
      <div className='flex items-end justify-between gap-8'>
        <div className='mb-3'>
          <h5 className=' text-purple-500 text-3xl font-semibold tracking-tight  dark:text-red-500'>
            {temp}
          </h5>
          <p className='dark:text-grey-200'>{condition}</p>
        </div>
        <TiWeatherPartlySunny
          className='dark:text-grey-50'
          size={120}
        />
      </div>
    </div>
  );
};

export default CardwithLogo;
