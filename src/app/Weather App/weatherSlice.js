import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//api imports
import { getWeather } from "./weatherAPI";

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
  // filteredUsers: [],
  // inputVlaue: "",
};

export const getWeatherAsync = createAsyncThunk(
  "weatherApp/getWeather",
  async () => {
    const response = await getWeather();
    return response.json();
    // return response.data;
  }
);

//actions
// const fetchProducts = "loadMore/fetchProducts";

const weatherSlice = createSlice({
  name: "weatherApp",
  initialState,
  reducers: {
    // addFilteredUser: (state, action) => {
    //   state.filteredUsers = action.payload;
    // },
    // handleInputValue: (state, action) => {
    //   state.inputVlaue = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherAsync.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload, new Date().getDay());

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
        console.log(action.payload, new Date().getDay());
      })
      .addCase(getWeatherAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        console.log(action.error);
      })
      .addCase(getWeatherAsync.pending, (state) => {
        state.loading = true;
      });
  },
});
// export const { addFilteredUser, handleInputValue } = weatherSlice.actions;
export default weatherSlice.reducer;
