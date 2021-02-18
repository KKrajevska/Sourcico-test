import { combineReducers } from "redux";
import { RecipesState } from "../types/recipes.types";

import recipes from "./recipes.reducer";

export interface RootState {
  recipes: RecipesState;
}

const rootReducer = combineReducers({ recipes: recipes });

export default rootReducer;
