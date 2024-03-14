import { configureStore } from "@reduxjs/toolkit";
import loadMoreReducer from "../components/Load-More-Button/loadMoreSlice";

export const store = configureStore({
  reducer: {
    loadMore: loadMoreReducer,
  },
});
