import { createSlice } from "@reduxjs/toolkit";

const initialState = { mode: false };

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = !state.mode;
    },
  },
});

export const { toggleMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
