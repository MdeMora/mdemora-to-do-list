/* eslint-disable indent */
import { Card, Typography, Box } from "@mui/material"
import styled from "@emotion/styled"
import theme from "theme"

export const TaskCard = styled(Card)`
  display: flex;
  padding: ${theme.spacing(2)};
  margin: ${theme.spacing(1)};
  border: 4px solid
    ${({ finished }) =>
      finished ? "rgba(0, 0, 0, 0.3)" : theme.palette.green300};
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

export const TaskCardContent = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: ${theme.spacing(2)};
`

export const TaskCardActions = styled(Box)`
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  padding-left: ${theme.spacing(1)};
`

export const TaskCardTitle = styled(Typography)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
`
