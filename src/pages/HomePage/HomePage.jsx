import React from "react"
import { Typography, Box } from "@mui/material"
import { StyledButton, TodoSVG } from "./HomePageStyledComponents"
import CodeSvg from "assets/undraw_Dev_focus_re_6iwt.svg"
import { useDispatch, useSelector } from "react-redux"
import { signInWithGoogleAction } from "redux/ducks/userDuck"
import { useHistory } from "react-router"
import URL from "constants/navigation"
import { useTheme } from "@mui/system"

const HomePage = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.user)
  const history = useHistory()
  const theme = useTheme()

  return (
    <Box
      display="flex"
      maxWidth={theme.breakpoints.values.lg}
      margin="0 auto"
      flex={1}
    >
      <Box mt={4}>
        <Typography variant="h1">TaskMora</Typography>
        <Box mt={4} />
        {!user && (
          <Typography variant="h2">
            Organize yourself and be more productive
          </Typography>
        )}

        <Box mt={4} />
        {user ? (
          <StyledButton
            variant="outlined"
            onClick={() => history.push(URL.APP)}
          >
            Go to the app
          </StyledButton>
        ) : (
          <StyledButton
            variant="outlined"
            onClick={() => signInWithGoogleAction(history)(dispatch)}
          >
            Log-In
          </StyledButton>
        )}
      </Box>

      <TodoSVG src={CodeSvg} />
    </Box>
  )
}

export default HomePage
