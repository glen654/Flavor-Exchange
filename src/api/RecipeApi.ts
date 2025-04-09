export async function searchRecipes(query: string) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
}

// recipeApi.ts
export async function getAllRecipes() {
  try {
    // First get the full list of meals by category
    const categoriesResponse = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const categoriesData = await categoriesResponse.json();
    
    // Then fetch all meals from each category
    const allRecipes = [];
    for (const category of categoriesData.categories) {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`
      );
      const data = await response.json();
      if (data.meals) {
        allRecipes.push(...data.meals);
      }
    }
    
    // Remove duplicates (some recipes appear in multiple categories)
    const uniqueRecipes = Array.from(new Set(allRecipes.map(meal => meal.idMeal)))
      .map(id => allRecipes.find(meal => meal.idMeal === id));
    
    return uniqueRecipes;
  } catch (error) {
    console.error("Error fetching all recipes:", error);
    return [];
  }
}

export async function getRecipeDetails(id: string) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    return data.meals?.[0] || null;
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    return null;
  }
}
