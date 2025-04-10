import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../reducers/AuthReducer";
import FavouritesReducer from "../reducers/FavouritesSlice";
import RecipeReducer from "../reducers/AddRecipeSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    favourite: FavouritesReducer,
    recipes: RecipeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
