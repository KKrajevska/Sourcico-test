import { AddCircleOutline, Fastfood } from "@material-ui/icons";
import AddRecipe from "../containers/addRecipe/AddRecipe";
import Recipes from "../containers/recipes/Recipes";

const Routes = [
  {
    path: "recipes",
    component: Recipes,
    name: "Recipes",
    icon: Fastfood,
    routes: [
      {
        path: ":recipeId",
        component: () => "Not found",
      },
    ],
  },
  {
    path: "add",
    name: "Add Recipe",
    icon: AddCircleOutline,
    component: AddRecipe,
  },
];

export default Routes;
