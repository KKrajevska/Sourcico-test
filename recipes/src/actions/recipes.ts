import { RECIPES } from "../constants/recipes";
import { SingleRecipe } from "../types/recipes.types";

export const recipesActions = {
  addRecipe: (recipe: SingleRecipe) => ({
    type: RECIPES.ADD_RECIPE,
    payload: { recipe },
  }),
  deleteRecipe: (id: number) => ({
    type: RECIPES.DELETE_RECIPE,
    payload: { id },
  }),
};
