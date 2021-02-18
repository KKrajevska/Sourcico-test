import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { recipesActions } from "../../actions/recipes";
import { RootState } from "../../store/root.reducer";
import { PureRecipesTable } from "./PureRecipesTable";

const RecipesTable = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const recipes = useSelector((state: RootState) => state.recipes.recipes);

  const deleteEntry = (id: number) => {
    dispatch(recipesActions.deleteRecipe(id));
  };

  const goToEntry = (id: number) => {
    history.push(`/recipe/${id}`);
  };

  return (
    <PureRecipesTable
      recipes={recipes}
      deleteEntry={deleteEntry}
      goToEntry={goToEntry}
    ></PureRecipesTable>
  );
};

export default RecipesTable;
