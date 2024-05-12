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
import {
  getWeatherAsync,
  getWeatherForecaseAsync,
  setNewSearch,
} from "../../app/Weather App/weatherSlice";

const WeatherApp = () => {
  const weather = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  // console.log(weather.dailyForecast[0].maxTemp);
  //city to search
  const newSearch = useSelector((state) => state.weather.newSearch);

  //dummy call
  useEffect(() => {
    dispatch(getWeatherAsync(newSearch));
    dispatch(getWeatherForecaseAsync(newSearch));
  }, [newSearch]);

  return (
    // main container
    <div className='flex flex-col gap-3 rounded-2xl overflow-hidden m-5 mx-auto max-w-screen-xl p-2 bg-white dark:bg-grey-700'>
      {/* top nav */}
      <div className='topNav flex items-center justify-between bg-gray-100 dark:bg-grey-900 shadow-md rounded-xl pl-5 p-1 w-full'>
        <MyHeading2>React JS Weather App</MyHeading2>
        <div>
          <SearchWithButton
            dispatch={dispatch}
            setNewSearch={setNewSearch}>
            Enter Your City Here...
          </SearchWithButton>
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
          {weather.forecastLoading ? (
            <div>loading...</div>
          ) : (
            <WeatherCard3
              day='today'
              data={() => {
                const { maxTemp, minTemp, weatherDesc, icon } =
                  weather.cityWeatherData;
                return { maxTemp, minTemp, weatherDesc, icon };
              }}
            />
          )}
        </Container>
        {/* tomorrow*/}
        <Container>
          {weather.forecastLoading ? (
            <div>loading...</div>
          ) : (
            <WeatherCard3
              day='Tomorrow'
              data={() => {
                const { maxTemp, minTemp, weatherDesc, icon } =
                  weather.dailyForecast[0];
                return { maxTemp, minTemp, weatherDesc, icon };
              }}
            />
          )}
        </Container>
      </div>

      {/* 2nd row: hourly Forecast */}
      <div className='flex items-center bg-gray-100 dark:bg-grey-900 shadow-md rounded-xl py-2 px-5 mt-2.5 w-full'>
        <MyHeading2>Hourly Forecast</MyHeading2>
      </div>
      <div className='flex justify-between'>
        {weather && weather.hourlyForecast && weather.hourlyForecast.length
          ? weather.hourlyForecast.map((forecast) => {
              return (
                <Container key={forecast.id}>
                  <WeatherCard5 forecast={forecast} />
                </Container>
              );
            })
          : null}
      </div>

      {/* 3rd row: weekly Forecast */}
      <div className='flex items-center bg-gray-100 dark:bg-grey-900 shadow-md rounded-xl py-2 px-5 mt-2.5 w-full'>
        <MyHeading2>Daily Forecast</MyHeading2>
      </div>
      <div className='flex justify-between'>
        {weather && weather.dailyForecast && weather.dailyForecast.length
          ? weather.dailyForecast.map((forecast) => {
              return (
                <Container key={forecast.id}>
                  <WeatherCard4 forecast={forecast} />
                </Container>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default WeatherApp;
