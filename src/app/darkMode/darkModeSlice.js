import { createSlice } from "@reduxjs/toolkit";

const initialState = { mode: null };

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { toggleMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
