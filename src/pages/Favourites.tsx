import { useSelector } from "react-redux";
import { RecipeCard } from "../components/RecipeCard";
import { Footer } from "../components/Footer";

// Favourites page
export function Favourites() {
  const favouriteRecipes = useSelector(
    (state) => state.favourite.favouriteRecipes
  );

  if (favouriteRecipes.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 flex items-center justify-center">
          <p className="text-gray-600 text-lg font-semibold">
            Looks like there are no favourite recipes yet! 🍳
          </p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 px-4 py-6 grid items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {favouriteRecipes.map((recipe: any) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
