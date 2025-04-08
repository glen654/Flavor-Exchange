import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../reducers/AuthReducer";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
