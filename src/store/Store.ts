import { configureStore } from "@reduxjs/toolkit";
import FavouritesReducer from "../reducers/FavouritesSlice";
import RecipeReducer from "../reducers/AddRecipeSlice";
import UserReducer from "../reducers/UserSlice";

// Redux store
export const store = configureStore({
  reducer: {
    favourite: FavouritesReducer,
    recipes: RecipeReducer,
    users: UserReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
