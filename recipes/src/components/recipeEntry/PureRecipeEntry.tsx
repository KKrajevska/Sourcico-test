import {
  Button,
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
import {
  ColumnWrapper,
  EntryWrapper,
  Row,
  StlTextField,
  PreparationLabel,
  StlTextareaAutosize,
  StlListItemText,
  Heading,
  ButtonFlexBox,
} from "./recipeEntry.styles";

export const PureRecipeEntry = () => {
  const ingredients = INGREDIENTS.map((ingredient, val) => (
    <ListItem>
      <StlListItemText primary={ingredient} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <AddCircleOutline color="primary" />
        </IconButton>
        <IconButton edge="end" aria-label="delete">
          <Delete color="error" />
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
              <StlTextField variant="outlined" label="Name"></StlTextField>
              <StlTextField variant="outlined" label="Source"></StlTextField>
            </ColumnWrapper>
            <ColumnWrapper>
              <Row>
                <PreparationLabel>Preparation Time:</PreparationLabel>
                <TextField
                  variant="outlined"
                  label="Hours"
                  type="number"
                ></TextField>
                <TextField
                  variant="outlined"
                  label="Minutes"
                  type="number"
                ></TextField>
              </Row>
              <PreparationLabel
                style={{ marginLeft: "0.5rem", marginTop: "0.5rem" }}
              >
                Preparation Instructions:
              </PreparationLabel>
              <StlTextareaAutosize></StlTextareaAutosize>
            </ColumnWrapper>
          </Row>
          <Row style={{ marginLeft: "2.5rem" }}>
            <Typography>Ingredients: </Typography>
          </Row>
        </ColumnWrapper>
        <ColumnWrapper>
          <PreparationLabel style={{ marginLeft: "1rem", marginTop: "0.5rem" }}>
            Add Ingredients:
          </PreparationLabel>
          <List>{ingredients}</List>
        </ColumnWrapper>
      </Row>
      <ButtonFlexBox>
        <Button color="primary" variant="contained">
          Save
        </Button>
      </ButtonFlexBox>
    </EntryWrapper>
  );
};
