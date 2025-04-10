import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Stack,
  IconButton,
  CardActions,
  Tooltip,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import { useState } from "react";
import { Recipe } from "../models/Recipe";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../reducers/FavouritesSlice";

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  const [isShared, setIsShared] = useState(false);
  const dispatch = useDispatch();

  const favouriteRecipes = useSelector(
    (state) => state.favourite.favouriteRecipes
  );

  const isFavorite = favouriteRecipes.some((r) => r.idMeal === recipe.idMeal);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(recipe));
  };

  const handleShareClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: recipe.strMeal,
          text: `Check out this delicious ${recipe.strMeal} recipe!`,
          url: window.location.href,
        })
        .then(() => setIsShared(true))
        .catch(console.error);
    } else {
      navigator.clipboard.writeText(
        `${recipe.strMeal} - ${window.location.href}`
      );
      setIsShared(true);
      setTimeout(() => setIsShared(false), 2000);
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 360,
        m: 2,
        ":hover": {
          boxShadow: 6,
          transform: "translateY(-2px)",
          transition: "all 0.3s ease",
        },
        cursor: "pointer",
      }}
      className="shadow-lg"
    >
      <CardMedia
        component="img"
        height="140"
        image={recipe.strMealThumb}
        alt={recipe.strMeal}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize: "18px" }}
        >
          {recipe.strMeal}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          <Chip label={recipe.strArea} size="small" color="primary" />
          <Chip label={recipe.strCategory} size="small" color="secondary" />
        </Stack>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
        <Tooltip
          title={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <IconButton
            aria-label="add to favorites"
            onClick={handleFavoriteClick}
            color={isFavorite ? "error" : "default"}
          >
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Tooltip>

        <Tooltip title={isShared ? "Copied to clipboard!" : "Share recipe"}>
          <IconButton
            aria-label="share"
            onClick={handleShareClick}
            color={isShared ? "success" : "default"}
          >
            <ShareIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}
