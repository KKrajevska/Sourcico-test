import {
  ListItemText,
  TextareaAutosize,
  TextField,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";

export const EntryWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 5rem auto;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

export const StlTextField = styled(TextField)`
  margin: 0.5rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5rem;
`;

export const PreparationLabel = styled(Typography)`
  margin-top: 1rem;
  margin-right: 1rem;
`;

export const StlTextareaAutosize = styled(TextareaAutosize)`
  min-height: 3rem;
  margin-left: 0.5rem;
`;

export const StlListItemText = styled(ListItemText)`
  width: 10rem;
`;

export const Heading = styled(Typography)`
  margin: 1rem 3rem;
`;

export const ButtonFlexBox = styled.div`
  display: "flex";
  flex-direction: "row";
  margin-right: 5rem;
  margin-bottom: 1rem;
  text-align: right;
`;
