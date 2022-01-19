import styled from "@emotion/styled"
import { Box, Typography } from "@mui/material"

const taskCard = ({ theme, active, finished }) => ({
  display: "flex",
  padding: theme.spacing(1),
  flex: 1,
  width: "100%",
  borderTop: `1px solid ${theme.palette.primary.dark}`,
  position: "relative",
  ":hover": {
    cursor: "pointer",
  },
  background: finished
    ? "rgba(0, 0, 0, 0.1)"
    : active && "rgba(203, 153, 126, 0.25)",
})

const taskCardContent = () => ({})
const taskCardActions = () => ({})
const taskCardTitle = () => ({})
const taskCardDate = ({ theme }) => ({
  position: "absolute",
  right: 0,
  bottom: 4,
  ...theme.typography.overline,
  letterSpacing: 0.5,
})

export const TaskCard = styled(Box)(taskCard)
export const TaskCardContent = styled(Box)(taskCardContent)
export const TaskCardTitle = styled(Box)(taskCardTitle)
export const TaskCardActions = styled(Box)(taskCardActions)
export const TaskCardDate = styled(Typography)(taskCardDate)
