import axios from "axios";

const API = "c602a8a47d17261e62050fb690a93982"; // open weather api
export const getWeather = async () => {
  return await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${"sargodha"}&appid=${API}&units=metric`

    // `http://api.openweathermap.org/data/2.5/forecast/daily?q=${"sargodha"}&cnt=${5}&appid=${API}&units=metric`
  );
  // return await fetch(
  //   `https://api.openweathermap.org/data/2.5/weather?q=${"sargodha"}&appid=${API}&units=metric`
  // );
};

// https://api.openweathermap.org/data/3.0/onecall?lat=${32.0898005}&lon=${72.6782574}&appid={API}

//lan 32.0898005
//lon 72.6782574
