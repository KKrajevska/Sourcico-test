import { recipesActions } from "../actions/recipes";
import { INGREDIENTS } from "../constants/ingredients";

export type Ingredient = typeof INGREDIENTS[number];
export type Ingredients = Partial<Record<Ingredient, number>>;

export type SingleRecipe = {
  name: string;
  ingredients: Ingredients;
  preparationHours: string;
  preparationMinutes: string;
  source: string;
  instructions: string;
};

export interface RecipesState {
  recipes: SingleRecipe[];
}
type RecipeActions = typeof recipesActions;

export type RecipeAction = ReturnType<RecipeActions[keyof RecipeActions]>;
export type RecipesReducer = (
  state: RecipesState,
  action: RecipeAction
) => RecipesState;
