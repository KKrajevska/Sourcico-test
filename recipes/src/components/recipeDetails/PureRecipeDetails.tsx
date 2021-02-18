import { Delete, Fastfood } from "@material-ui/icons";
import React from "react";
import { SingleRecipe } from "../../types/recipes.types";
import {
  ButtonFlexBox,
  EntryWrapper,
  Heading,
  ColumnWrapper,
  Row,
  StlButton,
} from "../sharedStyles.styles";
import { parseIngredients, parseTime } from "../utils/parseData";
import { StlTypography } from "./recipeDetails.styles";

type RecipeDetailsProps = {
  singleRecipe: SingleRecipe;
  deleteRecipe: () => void;
  goToRecipes: () => void;
};
export const PureRecipeDetails = ({
  singleRecipe,
  deleteRecipe,
  goToRecipes,
}: RecipeDetailsProps) => {
  return singleRecipe ? (
    <EntryWrapper>
      <Row>
        <ColumnWrapper>
          <Heading variant="h5">Recipe Details:</Heading>
          <StlTypography>Name: {singleRecipe.name} </StlTypography>
          <StlTypography>Source: {singleRecipe.source} </StlTypography>
          <StlTypography>
            Ingredients: {parseIngredients(singleRecipe.ingredients)}
          </StlTypography>
          <StlTypography>
            Preparation time:{" "}
            {parseTime(
              singleRecipe.preparationHours,
              singleRecipe.preparationMinutes
            )}
          </StlTypography>
        </ColumnWrapper>
        <ColumnWrapper>
          <Heading variant="h5">Instructions:</Heading>
          <Heading>{singleRecipe.instructions}</Heading>
        </ColumnWrapper>
      </Row>
      <ButtonFlexBox>
        <StlButton
          variant="contained"
          color="primary"
          startIcon={<Fastfood></Fastfood>}
          onClick={goToRecipes}
        >
          Go to Recipes
        </StlButton>
        <StlButton
          variant="contained"
          color="secondary"
          startIcon={<Delete></Delete>}
          onClick={deleteRecipe}
        >
          Delete Recipe
        </StlButton>
      </ButtonFlexBox>
    </EntryWrapper>
  ) : (
    <EntryWrapper style={{ width: "50%" }}>
      <Heading variant="h5">Recipe not found</Heading>
    </EntryWrapper>
  );
};
