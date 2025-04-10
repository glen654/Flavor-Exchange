import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MyRecipe } from "../models/MyRecipe";
import axios from "axios";

export const initialState: MyRecipe[] = [];

// url for Mock api endpoint for recipes
const BASE_URL =
  "https://67f74d0c42d6c71cca649e21.mockapi.io/api/v1/recipes/recipes";

// thunk for get all custom recipes
export const getAllRecipes = createAsyncThunk("recipe/getRecipe", async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

// thunk for save custom recipes
export const saveRecipe = createAsyncThunk(
  "recipe/saveRecipe",
  async (recipe: MyRecipe) => {
    try {
      const response = await axios.post(BASE_URL, recipe);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const myRecipesSlice = createSlice({
  name: "myRecipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveRecipe.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(saveRecipe.rejected, (state, action) => {
        console.error("Failed to save Recipe", action.payload);
      })
      .addCase(saveRecipe.pending, (state, action) => {
        console.error("Pending");
      });
    builder
      .addCase(getAllRecipes.fulfilled, (state, action) => {
        const fetchedRecipes = action.payload;
        const uniqueRecipes = [
          ...new Map(
            fetchedRecipes.map((recipe) => [recipe.id, recipe])
          ).values(),
        ];
        return uniqueRecipes;
      })
      .addCase(getAllRecipes.rejected, (state, action) => {
        console.error("Failed to load Recipe data", action.payload);
      })
      .addCase(getAllRecipes.pending, (state, action) => {
        console.error("Pending load Recipe");
      });
  },
});

export default myRecipesSlice.reducer;
