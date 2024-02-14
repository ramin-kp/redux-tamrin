import { createSlice } from "@reduxjs/toolkit";
import { increment as incrementCounter } from "./counterSlice";

const initialState = {
  numberValue: 0,
};

const numberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.numberValue += action.payload;
    },
  },
  extraReducers: (build) => {
    build.addCase(incrementCounter, (state) => {
      state.numberValue++;
    });
  },
});
export default numberSlice.reducer;
export const { increment } = numberSlice.actions;
export const numberSelector = (store) => store.number.numberValue;
