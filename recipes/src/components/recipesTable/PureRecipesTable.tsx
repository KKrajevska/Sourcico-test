import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import { COLUMN_NAMES } from "../../constants/recipesTable";
import { StlPaper } from "./recipesTable.styles";

export const PureRecipesTable = () => {
  const headCells = Object.values(COLUMN_NAMES).map(
    (value: string, idx: number) => {
      return <TableCell key={idx}>{value}</TableCell>;
    }
  );
  return (
    <TableContainer component={StlPaper}>
      <Table>
        <TableHead>
          <TableRow>{headCells}</TableRow>
        </TableHead>
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  );
};
