import {
  ListItemText,
  TextareaAutosize,
  TextField,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";

export const StlTextField = styled(TextField)`
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
