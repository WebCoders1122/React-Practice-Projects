import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//api imports
import { getUsers } from "./searchAPI";

//initial state
const initialState = {
  users: [],
  status: "idle",
  filteredUsers: [],
  inputVlaue: "",
};

export const getUsersAsync = createAsyncThunk(
  "autoCompleteCearch/fetchUsers",
  async () => {
    const response = await getUsers();
    return response.data;
  }
);

//actions
// const fetchProducts = "loadMore/fetchProducts";

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addFilteredUser: (state, action) => {
      state.filteredUsers = action.payload;
    },
    handleInputValue: (state, action) => {
      state.inputVlaue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.users = action.payload.users.map(
          (user) => user.firstName + " " + user.lastName
        );
      })
      .addCase(getUsersAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error;
      })
      .addCase(getUsersAsync.pending, (state) => {
        state.status = "pending";
      });
  },
});
export const { addFilteredUser, handleInputValue } = searchSlice.actions;
export default searchSlice.reducer;
