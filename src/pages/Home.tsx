import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import {
  Grid,
  Box,
  CircularProgress,
  Typography,
  Pagination,
} from "@mui/material";
import { searchRecipes, getAllRecipes } from "../api/RecipeApi";
import { RecipeCard } from "../components/RecipeCard";
import { Footer } from "../components/Footer";

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strArea: string;
  strCategory: string;
}

const RECIPES_PER_PAGE = 4;

// The Home component serves as the main page, displaying a list of recipes,
// handling search functionality, pagination, and loading state.
export function Home() {
  const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);
  const [displayedRecipes, setDisplayedRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  // use effect for load all the recipes
  useEffect(() => {
    const loadRecipes = async () => {
      setLoading(true);
      const recipes = await getAllRecipes();
      setAllRecipes(recipes);
      setTotalPages(Math.ceil(recipes.length / RECIPES_PER_PAGE));
      updateDisplayedRecipes(recipes, 1);
      setLoading(false);
    };
    loadRecipes();
  }, []);

  // Updates the recipes shown based on the current page
  const updateDisplayedRecipes = (recipes: Recipe[], pageNum: number) => {
    const startIndex = (pageNum - 1) * RECIPES_PER_PAGE;
    const endIndex = startIndex + RECIPES_PER_PAGE;
    setDisplayedRecipes(recipes.slice(startIndex, endIndex));
  };

  // Handles user-initiated page changes (from the pagination UI)
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    updateDisplayedRecipes(allRecipes, value);
  };

  // Handles user search input and updates recipe list accordingly
  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    setPage(1);

    if (query.trim() === "") {
      updateDisplayedRecipes(allRecipes, 1);
      return;
    }

    setLoading(true);
    const results = await searchRecipes(query);
    setAllRecipes(results);
    setTotalPages(Math.ceil(results.length / RECIPES_PER_PAGE));
    updateDisplayedRecipes(results, 1);
    setLoading(false);
  };

  return (
    <main className="w-full flex flex-col">
      <Header
        title={
          <p>
            Taste the World with
            <br /> FlavorExchange!
          </p>
        }
        type="home"
      />

      <div className="px-4 py-6 max-w-4xl mx-auto w-full">
        <SearchBar
          onChange={handleSearch}
          placeholder="Search recipes, cuisines, ingredients..."
        />
      </div>

      {searchQuery && (
        <div className="px-4 py-2 text-center">
          <Typography variant="h6">
            Showing results for: <strong>{searchQuery}</strong>
          </Typography>
        </div>
      )}

      <Box sx={{ p: 4 }}>
        {loading ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : displayedRecipes.length > 0 ? (
          <>
            <Grid container spacing={6}>
              {displayedRecipes.map((recipe) => (
                <Grid item key={recipe.idMeal} xs={12} sm={6} md={4}>
                  <RecipeCard recipe={recipe} />
                </Grid>
              ))}
            </Grid>

            {totalPages > 1 && (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={handlePageChange}
                  color="primary"
                />
              </Box>
            )}
          </>
        ) : (
          <Typography variant="h6" align="center">
            No recipes found
          </Typography>
        )}
      </Box>
      <Footer />
    </main>
  );
}
