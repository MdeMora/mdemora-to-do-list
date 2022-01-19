import styled from "@emotion/styled"
import { Paper, IconButton } from "@mui/material"

export const StyledPaper = styled(Paper)(({ theme }) => ({
  border: `5px solid ${theme.palette.green700}`,
  backgroundColor: theme.palette.beige300,
  width: 710,
}))

export const DeleteButton = styled(IconButton)(() => ({
  position: "absolute",
  top: 0,
  right: 0,
}))
