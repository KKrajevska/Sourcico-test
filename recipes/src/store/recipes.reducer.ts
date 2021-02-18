import { RECIPES } from "../constants/recipes";
import { RecipesReducer, RecipesState } from "../types/recipes.types";

const initialState: RecipesState = {
  recipes: [],
};

const recipesReducer: RecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECIPES.ADD_RECIPE: {
      let newRecipes = [...state.recipes];
      newRecipes.push(action.payload.recipe);
      return { ...state, recipes: newRecipes };
    }
    case RECIPES.DELETE_RECIPE: {
      let newRecipes = [...state.recipes];
      newRecipes.splice(action.payload.id, 1);
      return { ...state, recipes: newRecipes };
    }
    default:
      return state;
  }
};

export default recipesReducer;
