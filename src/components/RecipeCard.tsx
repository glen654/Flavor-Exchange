import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strArea: string;
  strCategory: string;
}

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={recipe.strMealThumb}
        alt={recipe.strMeal}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.strMeal}
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip label={recipe.strArea} size="small" />
          <Chip label={recipe.strCategory} size="small" />
        </Stack>
      </CardContent>
    </Card>
  );
}
