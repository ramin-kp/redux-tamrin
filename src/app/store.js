import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import numberReducer from "./../features/numberSlice";
import logger from "redux-logger";
import usersReducers from "../features/usersSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    number: numberReducer,
    users: usersReducers,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
