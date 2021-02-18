import { AddCircleOutline, Fastfood } from "@material-ui/icons";
import AddRecipe from "../containers/addRecipe/AddRecipe";
import Recipes from "../containers/recipes/Recipes";
import SingleRecipe from "../containers/singleRecipe/SingleRecipe";

const Routes = [
  {
    path: "recipes",
    component: Recipes,
    name: "Recipes",
    icon: Fastfood,
  },
  {
    path: "recipe/:recipeId",
    component: SingleRecipe,
  },
  {
    path: "add",
    name: "Add Recipe",
    icon: AddCircleOutline,
    component: AddRecipe,
  },
];

export default Routes;
