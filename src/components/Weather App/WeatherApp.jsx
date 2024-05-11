import React, { useEffect } from "react";
import SearchWithButton from "../Reuseable Components/SearchWithButton";
import { Container } from "../Reuseable Components/Container";
import CardwithLogo from "../Reuseable Components/CardwithLogo";
import WeatherCard2 from "./WeatherCard2";
import WeatherCard3 from "./WeatherCard3";
import WeatherCard4 from "./WeatherCard4";
import WeatherCard5 from "./WeatherCard5";
import MyHeading2 from "../Reuseable Components/MyHeading2";
import { useDispatch, useSelector } from "react-redux";
// weather slice imports
import { getWeatherAsync } from "../../app/Weather App/weatherSlice";

const WeatherApp = () => {
  const weather = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  console.log(weather);

  //today card data
  const { maxTemp, minTemp, weatherDesc, feelsLike, icon } = useSelector(
    (state) => state.weather.cityWeatherData
  );

  //dummy call
  useEffect(() => {
    dispatch(getWeatherAsync());
  }, []);

  return (
    // main container
    <div className='flex flex-col gap-3 rounded-2xl overflow-hidden m-5 mx-auto max-w-screen-xl p-2 bg-white dark:bg-grey-700'>
      {/* top nav */}
      <div className='topNav flex items-center justify-between bg-gray-100 dark:bg-grey-900 shadow-md rounded-xl pl-5 p-1 w-full'>
        <MyHeading2>React JS Weather App</MyHeading2>
        <div>
          <SearchWithButton>Enter Your City Here...</SearchWithButton>
        </div>
      </div>
      {/* 1st row : weather information, today and tomorrow */}
      <div className='flex justify-between'>
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
        {/* today*/}
        <Container>
          <WeatherCard3
            day='today'
            data={{ maxTemp, minTemp, weatherDesc, feelsLike, icon }}
          />
        </Container>
        {/* tomorrow*/}
        <Container>{/* <WeatherCard3 /> */}</Container>
      </div>

      {/* 2nd row: hourly Forecast */}
      <div className='flex items-center bg-gray-100 dark:bg-grey-900 shadow-md rounded-xl py-2 px-5 mt-2.5 w-full'>
        <MyHeading2>Hourly Forecast</MyHeading2>
      </div>
      <div className='flex justify-between'>
        <Container>
          <WeatherCard5 />
        </Container>
        <Container>
          <WeatherCard5 />
        </Container>
        <Container>
          <WeatherCard5 />
        </Container>
        <Container>
          <WeatherCard5 />
        </Container>
        <Container>
          <WeatherCard5 />
        </Container>
        <Container>
          <WeatherCard5 />
        </Container>
        <Container>
          <WeatherCard5 />
        </Container>
        <Container>
          <WeatherCard5 />
        </Container>
      </div>

      {/* 3rd row: weekly Forecast */}
      <div className='flex items-center bg-gray-100 dark:bg-grey-900 shadow-md rounded-xl py-2 px-5 mt-2.5 w-full'>
        <MyHeading2>Daily Forecast</MyHeading2>
      </div>
      <div className='flex justify-between'>
        <Container>
          <WeatherCard4 />
        </Container>
        <Container>
          <WeatherCard4 />
        </Container>
        <Container>
          <WeatherCard4 />
        </Container>
        <Container>
          <WeatherCard4 />
        </Container>
        <Container>
          <WeatherCard4 />
        </Container>
      </div>
    </div>
  );
};

export default WeatherApp;
