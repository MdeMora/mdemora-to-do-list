import { Box, Tab } from "@mui/material"
import styled from "@emotion/styled"

export const TaskList = styled(Box)`
  flex: 1;
`

export const StyledTabs = styled(Tab)(({ theme }) => ({
  ...theme.typography.body2,
  textTransform: "capitalize",
}))
