import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//api imports
import { getProducts } from "./loadMoreAPI";

//initial state
const initialState = {
  products: [],
  status: "idle",
  count: 0,
  disableButton: false,
};

export const getProductsAsync = createAsyncThunk(
  "loadMore/fetchProducts",
  async (count) => {
    const response = await getProducts(count);
    return response.data;
  }
);

//actions
const fetchProducts = "loadMore/fetchProducts";

const loadMoreSlice = createSlice({
  name: "loadMore",
  initialState,
  reducers: {
    inc_count: (state) => {
      state.count += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = [...state.products, ...action.payload.products];
        if (state.products.length == 100) {
          state.disableButton = true;
          console.log(state.disableButton);
        }
      })
      .addCase(getProductsAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error;
      })
      .addCase(getProductsAsync.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchProducts, (state, action) => {
        console.log(action);
        if (state.products.length == 100) {
          state.disableButton = true;
        } else {
          state.disableButton = false;
        }
        console.log(state.disableButton);
      });
  },
});
export const { inc_count } = loadMoreSlice.actions;
export default loadMoreSlice.reducer;
