import { configureStore } from "@reduxjs/toolkit";
import loadMoreReducer from "../components/Load-More-Button/loadMoreSlice";
import darkModeReducer from "./darkMode/darkModeSlice";

export const store = configureStore({
  reducer: {
    loadMore: loadMoreReducer,
    darkMode: darkModeReducer,
  },
});
