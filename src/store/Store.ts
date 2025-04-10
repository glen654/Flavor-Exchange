import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../reducers/AuthReducer";
import FavouritesReducer from "../reducers/FavouritesSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    favourite: FavouritesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
