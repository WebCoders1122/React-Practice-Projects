import React from "react";
import SearchWithButton from "../Reuseable Components/SearchWithButton";
import { Container } from "../Reuseable Components/Container";
import CardwithLogo from "../Reuseable Components/CardwithLogo";
import WeatherCard2 from "./WeatherCard2";

const WeatherApp = () => {
  return (
    // main container
    <div className='flex flex-col gap-3 rounded-2xl overflow-hidden m-5 mx-auto max-w-screen-xl p-2 bg-white dark:bg-grey-700'>
      {/* top nav */}
      <div className='topNav flex items-center justify-between bg-gray-100 dark:bg-grey-900 rounded-xl p-1 w-full'>
        <h2 className='font-semibold text-2xl pl-5 text-purple-700 dark:text-red-500 '>
          Weather App
        </h2>
        <div>
          <SearchWithButton>Enter Your City Here...</SearchWithButton>
        </div>
      </div>
      {/* weather iformation */}
      <Container>
        <div className='flex'>
          {/* weather info1 left */}
          <CardwithLogo
            day={"Monday"}
            date={"April 19, 2024"}
            temp={"18C"}
            condition={"Patially Cloudy"}
            logo={null}
          />
          {/* weather info2 right*/}
          <WeatherCard2 />
        </div>
      </Container>
    </div>
  );
};

export default WeatherApp;
