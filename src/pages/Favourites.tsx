import { useSelector } from "react-redux";
import { RecipeCard } from "../components/RecipeCard";

export function Favourites() {
  const favouriteRecipes = useSelector(
    (state) => state.favourite.favouriteRecipes
  );

  if (favouriteRecipes.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-600 text-lg font-semibold">
          Looks like there are no favourite recipes yet! 🍳
        </p>
      </div>
    );
  }
  return (
    <div className="px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {favouriteRecipes.map((recipe: any) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
}
