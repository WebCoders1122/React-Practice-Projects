import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//api imports
import { getWeather, getWeatherForecast } from "./weatherAPI";

//misc veriables
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//initial state
const initialState = {
  cityWeatherData: {
    cityName: "--",
    country: "--",
    day: "--",
    date: "--",
    temperature: "--",
    icon: "--",
    weatherDesc: "--",
    sunrise: "--",
    sunset: "--",
    humidity: "--",
    pressure: "--",
    feelsLike: "--",
    maxTemp: "--",
    minTemp: "--",
    windSpeed: "--",
  },
  loading: false,
  error: null,
  newSearch: "islamabad",
  dailyForecast: [
    {
      id: "--",
      day: "--",
      weatherDesc: "--",
      icon: "--",
      minTemp: "--",
      maxTemp: "--",
    },
  ],
  hourlyForecast: [
    {
      id: "--",
      time: "--",
      weatherDesc: "--",
      temperature: "--",
      icon: "--",
    },
  ],
  forecastError: null,
  forecastLoading: false,
};

export const getWeatherAsync = createAsyncThunk(
  "weatherApp/getWeather",
  async (cityName) => {
    const response = await getWeather(cityName);
    return response.json();
    // return response.data;
  }
);

export const getWeatherForecaseAsync = createAsyncThunk(
  "weatherApp/getWeatherForecast",
  async (cityName) => {
    const response = await getWeatherForecast(cityName);
    return response.json();
  }
);

//actions
// const fetchProducts = "loadMore/fetchProducts";

const weatherSlice = createSlice({
  name: "weatherApp",
  initialState,
  reducers: {
    setNewSearch: (state, action) => {
      state.newSearch = action.payload;
    },
    // handleInputValue: (state, action) => {
    //   state.inputVlaue = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.cityWeatherData = {
          cityName: action.payload.name,
          country: action.payload.sys.country,
          day: new Date().toDateString(),
          temperature: action.payload.main.temp,
          icon: action.payload.weather[0].icon,
          weatherDesc: action.payload.weather[0].description,
          sunrise: new Date(
            action.payload.sys.sunrise * 1000
          ).toLocaleTimeString(),
          sunset: new Date(
            action.payload.sys.sunset * 1000
          ).toLocaleTimeString(),
          humidity: action.payload.main.humidity,
          pressure: action.payload.main.pressure,
          feelsLike: action.payload.main.feels_like,
          maxTemp: action.payload.main.temp_max,
          minTemp: action.payload.main.temp_min,
          windSpeed: action.payload.wind.speed,
        };
      })
      .addCase(getWeatherAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getWeatherAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWeatherForecaseAsync.fulfilled, (state, action) => {
        state.forecastLoading = false;
        //filtering hourly forecast
        let hourlyArray = []; // hourly forecast temporary array
        action.payload.list.slice(0, 8).map((forecast) => {
          // if (index > 7) return;
          let id = forecast.dt;
          let time = new Date(forecast.dt_txt).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          });
          let temperature = forecast.main.temp;
          let icon = forecast.weather[0].icon;
          let weatherDesc = forecast.weather[0].description;
          hourlyArray.push({
            id,
            time,
            temperature,
            icon,
            weatherDesc,
          });
        });
        state.hourlyForecast = hourlyArray;
        // filtering for daily forecast
        let dailyArray = []; // daily forecast temporary array
        action.payload.list.map((forecast) => {
          if (new Date(forecast.dt_txt).getHours() == 0) {
            let date = new Date(forecast.dt_txt).toLocaleDateString();
            let day = weekdays[new Date(forecast.dt_txt).getDay()];
            let weatherDesc = forecast.weather[0].description;
            let icon = forecast.weather[0].icon;
            let minTemp = forecast.main.temp_min;
            let maxTemp = forecast.main.temp_max;
            dailyArray.push({
              id: forecast.dt,
              date,
              day,
              weatherDesc,
              icon,
              minTemp,
              maxTemp,
            });
          }
        });
        state.dailyForecast = dailyArray.slice(0, 6);
      })
      .addCase(getWeatherForecaseAsync.pending, (state) => {
        state.forecastLoading = true;
      })
      .addCase(getWeatherForecaseAsync.rejected, (state, action) => {
        state.forecastLoading = false;
        state.forecastError = action.error;
      });
  },
});
export const { setNewSearch } = weatherSlice.actions;
export default weatherSlice.reducer;
