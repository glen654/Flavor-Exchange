import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Favourites } from "../models/Favourite";
import { Recipe } from "../models/Recipe";

const initialState: Favourites = {
  favouriteRecipes: JSON.parse(localStorage.getItem("favoriteRecipes") || "[]"),
};

const favouritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<Recipe>) {
      const recipe = action.payload;
      const exists = state.favouriteRecipes.find(
        (r) => r.idMeal === recipe.idMeal
      );

      if (exists) {
        state.favouriteRecipes = state.favouriteRecipes.filter(
          (r) => r.idMeal !== recipe.idMeal
        );
      } else {
        state.favouriteRecipes.push(recipe);
      }
      localStorage.setItem(
        "favoriteRecipes",
        JSON.stringify(state.favouriteRecipes)
      );
    },
  },
});

export const { toggleFavorite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
