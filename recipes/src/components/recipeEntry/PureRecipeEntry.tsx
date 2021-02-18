import {
  FormHelperText,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  TextField,
  Typography,
} from "@material-ui/core";
import { AddCircleOutline, Delete } from "@material-ui/icons";
import React from "react";
import { INGREDIENTS } from "../../constants/ingredients";
import { Ingredient, SingleRecipe } from "../../types/recipes.types";
import {
  EntryWrapper,
  Heading,
  ButtonFlexBox,
  ColumnWrapper,
  Row,
  StlButton,
} from "../sharedStyles.styles";
import {
  StlTextField,
  PreparationLabel,
  StlTextareaAutosize,
  StlListItemText,
} from "./recipeEntry.styles";

type RecipeEntryProps = {
  onTextFieldChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onAddIngredient: (ingreient: Ingredient) => void;
  disabledButton: boolean;
  recipeEntry: SingleRecipe;
  commaSeparatedIngredients: string;
  onSave: () => void;
  onRemoveIngredient: (ingredient: Ingredient) => void;
};

export const PureRecipeEntry = ({
  onTextFieldChange,
  onAddIngredient,
  disabledButton,
  commaSeparatedIngredients,
  onSave,
  onRemoveIngredient,
  recipeEntry,
}: RecipeEntryProps) => {
  const ingredients = INGREDIENTS.map((ingredient: Ingredient, idx) => (
    <ListItem key={idx}>
      <StlListItemText primary={ingredient} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="add"
          onClick={() => onAddIngredient(ingredient)}
        >
          <AddCircleOutline color="primary" />
        </IconButton>
        <IconButton
          edge="end"
          aria-label="delete"
          disabled={recipeEntry.ingredients[ingredient] ? false : true}
          onClick={() => onRemoveIngredient(ingredient)}
        >
          <Delete
            color={recipeEntry.ingredients[ingredient] ? "error" : "disabled"}
          />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  ));
  return (
    <EntryWrapper>
      <Heading variant="h5">Add New Recipe:</Heading>
      <Row>
        <ColumnWrapper>
          <Row>
            <ColumnWrapper>
              <StlTextField
                variant="outlined"
                label="Name"
                name="name"
                onChange={onTextFieldChange}
              ></StlTextField>
              <StlTextField
                variant="outlined"
                label="Source"
                name="source"
                onChange={onTextFieldChange}
              ></StlTextField>
            </ColumnWrapper>
            <ColumnWrapper>
              <Row>
                <PreparationLabel>Preparation Time:</PreparationLabel>
                <TextField
                  variant="outlined"
                  label="Hours"
                  type="number"
                  name="preparationHours"
                  onChange={onTextFieldChange}
                ></TextField>
                <TextField
                  variant="outlined"
                  label="Minutes"
                  type="number"
                  name="preparationMinutes"
                  onChange={onTextFieldChange}
                ></TextField>
              </Row>
              <PreparationLabel
                style={{ marginLeft: "0.5rem", marginTop: "0.5rem" }}
              >
                Preparation Instructions:
              </PreparationLabel>
              <StlTextareaAutosize
                name="instructions"
                onChange={onTextFieldChange}
              ></StlTextareaAutosize>
            </ColumnWrapper>
          </Row>
          <Row style={{ marginLeft: "2.5rem" }}>
            <Typography>Ingredients: {commaSeparatedIngredients}</Typography>
          </Row>
        </ColumnWrapper>
        <ColumnWrapper>
          <PreparationLabel style={{ marginLeft: "1rem", marginTop: "0.5rem" }}>
            Add Ingredients:
          </PreparationLabel>
          <List>{ingredients}</List>
        </ColumnWrapper>
      </Row>
      <Row>
        <FormHelperText>
          *Must contain name, preparation time and at least one ingredient
        </FormHelperText>
      </Row>

      <ButtonFlexBox>
        <StlButton variant="contained">Cancel</StlButton>
        <StlButton
          color="primary"
          variant="contained"
          disabled={!disabledButton}
          onClick={onSave}
        >
          Add Recipe
        </StlButton>
      </ButtonFlexBox>
    </EntryWrapper>
  );
};
