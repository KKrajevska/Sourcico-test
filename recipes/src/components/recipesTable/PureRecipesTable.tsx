import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Delete, Visibility } from "@material-ui/icons";
import React from "react";
import { COLUMN_NAMES } from "../../constants/recipesTable";
import { SingleRecipe } from "../../types/recipes.types";
import {
  parseIngredients,
  parseTime,
  totalIngredients,
} from "../utils/parseData";
import { StlPaper } from "./recipesTable.styles";

type RecipesTableProps = {
  recipes: SingleRecipe[];
  deleteEntry: (id: number) => void;
  goToEntry: (id: number) => void;
};

export const PureRecipesTable = ({
  recipes,
  deleteEntry,
  goToEntry,
}: RecipesTableProps) => {
  const headCells = Object.values(COLUMN_NAMES).map((value, idx: number) => {
    return <TableCell key={idx}>{value.name}</TableCell>;
  });

  const values = recipes.map((recipe, idx) => (
    <TableRow key={idx}>
      {Object.entries(COLUMN_NAMES).map(([key, val]) => {
        if (val.name === COLUMN_NAMES.ID.name) {
          return <TableCell key={val.name}>{idx}</TableCell>;
        }
        if (val.name === COLUMN_NAMES.INGREDIENTS.name) {
          const commaSeparated = parseIngredients(recipe.ingredients);
          return <TableCell key={val.name}>{commaSeparated}</TableCell>;
        }

        if (val.name === COLUMN_NAMES.PREPARATION_TIME.name) {
          const time = parseTime(
            recipe.preparationHours,
            recipe.preparationMinutes
          );
          return <TableCell key={val.name}>{time}</TableCell>;
        }

        if (val.name === COLUMN_NAMES.REMOVE.name) {
          return (
            <TableCell key={val.name}>
              <IconButton onClick={() => deleteEntry(idx)}>
                <Delete color="secondary"></Delete>
              </IconButton>
            </TableCell>
          );
        }

        if (val.name === COLUMN_NAMES.DISPLAY.name) {
          return (
            <TableCell key={val.name}>
              <IconButton onClick={() => goToEntry(idx)}>
                <Visibility color="primary"></Visibility>
              </IconButton>
            </TableCell>
          );
        }

        if (val.name === COLUMN_NAMES.NO_INGREDIENTS.name) {
          const sum = totalIngredients(recipe.ingredients);
          return <TableCell key={val.name}>{sum}</TableCell>;
        }

        return <TableCell key={val.name}>{recipe[val.key]}</TableCell>;
      })}
    </TableRow>
  ));

  return (
    <TableContainer component={StlPaper}>
      <Table>
        <TableHead>
          <TableRow>{headCells}</TableRow>
        </TableHead>
        <TableBody>{values}</TableBody>
      </Table>
    </TableContainer>
  );
};
