import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { recipesActions } from "../../actions/recipes";
import { Ingredient, SingleRecipe } from "../../types/recipes.types";
import { SINGLE_RECIPE_INITIAL } from "../../constants/singleRecipe";
import { PureRecipeEntry } from "./PureRecipeEntry";
import { parseIngredients } from "../utils/parseData";
import { useHistory } from "react-router-dom";

const RecipeEntry = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [recipeEntry, setrecipeEntry] = useState<SingleRecipe>(
    SINGLE_RECIPE_INITIAL
  );

  const onTextFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setrecipeEntry({ ...recipeEntry, [e.target.name]: e.target.value });
  };

  const onAddIngredient = (ingredient: Ingredient) => {
    setrecipeEntry({
      ...recipeEntry,
      ingredients: {
        ...recipeEntry.ingredients,
        [ingredient]: (recipeEntry.ingredients[ingredient] ?? 0) + 1,
      },
    });
  };

  const onRemoveIngredient = (ingredient: Ingredient) => {
    setrecipeEntry({
      ...recipeEntry,
      ingredients: {
        ...recipeEntry.ingredients,
        [ingredient]: (recipeEntry.ingredients[ingredient] ?? 0) - 1,
      },
    });
  };

  const onSave = () => {
    dispatch(recipesActions.addRecipe(recipeEntry));
    history.push("/recipes");
  };

  const disabledButton =
    recipeEntry.name === "" ||
    (recipeEntry.preparationHours === "" &&
      recipeEntry.preparationMinutes === "") ||
    Object.entries(recipeEntry.ingredients).length === 0;

  const commaSeparatedIngredients = parseIngredients(recipeEntry.ingredients);
  return (
    <PureRecipeEntry
      onTextFieldChange={onTextFieldChange}
      onAddIngredient={onAddIngredient}
      disabledButton={disabledButton}
      recipeEntry={recipeEntry}
      commaSeparatedIngredients={commaSeparatedIngredients}
      onSave={onSave}
      onRemoveIngredient={onRemoveIngredient}
    ></PureRecipeEntry>
  );
};

export default RecipeEntry;
