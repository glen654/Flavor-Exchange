import { useDispatch, useSelector } from "react-redux";
import { RecipeCard } from "../components/RecipeCard";
import { AddRecipeModal } from "../components/AddRecipe";
import { useEffect, useState } from "react";
import { getAllRecipes } from "../reducers/AddRecipeSlice";
import { AppDispatch } from "../store/Store";

export function MyRecipes() {
  const myRecipes = useSelector((state) => state.recipes);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (myRecipes.length === 0) {
      dispatch(getAllRecipes());
    }
  }, [dispatch, myRecipes.length]);

  if (myRecipes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <p className="text-gray-600 text-lg font-semibold">
          Looks like there are no added recipes yet! 🍳
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        >
          Add Recipe
        </button>

        <AddRecipeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center bg-green-500 text-white px-6 py-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
      >
        Add Recipe
      </button>

      <AddRecipeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      {myRecipes.map((recipe) => (
        <RecipeCard key={recipe.title} recipe={recipe} />
      ))}
    </div>
  );
}
