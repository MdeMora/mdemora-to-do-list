import React from "react"
import { Typography, Box } from "@mui/material"
import { StyledButton, TodoSVG } from "./HomePageStyledComponents"
import CodeSvg from "assets/undraw_Dev_focus_re_6iwt.svg"
import { useDispatch, useSelector } from "react-redux"
import { signInWithGoogleAction } from "redux/ducks/userDuck"
import { useHistory } from "react-router"
import URL from "constants/navigation"

const HomePage = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.user)
  const history = useHistory()
  return (
    <Box textAlign="center">
      <Box mt={4} />
      <Typography variant="h1">Welcome to MdeMora-To-Do-List</Typography>
      <Box mt={4} />
      {!user && (
        <Typography variant="h2">Please, Log In to use the app</Typography>
      )}

      <Box mt={4} />
      <TodoSVG src={CodeSvg} />
      <Box mt={4} />
      {user ? (
        <StyledButton variant="outlined" onClick={() => history.push(URL.APP)}>
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
  )
}

export default HomePage
