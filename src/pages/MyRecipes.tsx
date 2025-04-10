import { useDispatch, useSelector } from "react-redux";
import { RecipeCard } from "../components/RecipeCard";
import { AddRecipeModal } from "../components/AddRecipe";
import { useEffect, useState } from "react";
import { getAllRecipes } from "../reducers/AddRecipeSlice";
import { AppDispatch } from "../store/Store";

// Page for my custom recipes
export function MyRecipes() {
  const myRecipes = useSelector((state) => state.recipes);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  // use effect for load all my recipes
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
      <div className="col-span-1 md:col-span-2 flex justify-center mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        >
          Add Recipe
        </button>
      </div>
      {myRecipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}

      <AddRecipeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
