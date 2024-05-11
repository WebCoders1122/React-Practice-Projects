import { configureStore } from "@reduxjs/toolkit";
//reducers
import loadMoreReducer from "../components/Load-More-Button/loadMoreSlice";
import darkModeReducer from "./darkMode/darkModeSlice";
import searchReducer from "../app/AutoComplete Search/searchSlice";
import weatherReducer from "../app/Weather App/weatherSlice";
export const store = configureStore({
  reducer: {
    loadMore: loadMoreReducer,
    darkMode: darkModeReducer,
    search: searchReducer,
    weather: weatherReducer,
  },
});
