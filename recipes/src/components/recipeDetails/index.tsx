import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { recipesActions } from "../../actions/recipes";
import { RootState } from "../../store/root.reducer";
import { ParamTypes } from "../../types/params.types";
import { PureRecipeDetails } from "./PureRecipeDetails";

const RecipeDetails = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { recipeId } = useParams<ParamTypes>();
  const recipes = useSelector((state: RootState) => state.recipes.recipes);
  const singleRecipe = recipes[parseInt(recipeId)];

  const deleteRecipe = () => {
    dispatch(recipesActions.deleteRecipe(parseInt(recipeId)));
    history.push("/recipes");
  };

  const goToRecipes = () => {
    history.push("/recipes");
  };
  return (
    <PureRecipeDetails
      singleRecipe={singleRecipe}
      deleteRecipe={deleteRecipe}
      goToRecipes={goToRecipes}
    ></PureRecipeDetails>
  );
};

export default RecipeDetails;
