import { Button, Typography } from "@material-ui/core";
import styled from "styled-components";

export const EntryWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: 5rem auto;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Heading = styled(Typography)`
  margin: 1rem 3rem;
`;

export const ButtonFlexBox = styled.div`
  margin-right: 3rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-end;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5rem;
`;

export const StlButton = styled(Button)`
  margin-right: 0.5rem;
`;
