import React from "react"
import { useTheme } from "@mui/system"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import styled from "@emotion/styled"

import { Typography, Box, Button } from "@mui/material"

import { signInWithGoogleAction } from "redux/ducks/userDuck"
import CodeSvg from "assets/undraw_Dev_focus_re_6iwt.svg"
import URL from "constants/navigation"

import { ctm, todoSVG } from "./HomePageStyledComponents"
import useMediaQuery from "hooks/useMediaQuery"

const HomePage = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.user)
  const history = useHistory()
  const { isBigScreen, isMobileScreen } = useMediaQuery()

  const TodoSVG = styled("img")(todoSVG)
  const CTMButton = styled(Button)(ctm)

  return (
    <Box display="flex" alignItems="center" flex="1">
      <Box display="flex">
        <Box
          mt={4}
          maxWidth={600}
          ml={isMobileScreen ? 0 : 14}
          textAlign={isMobileScreen && "center"}
        >
          <Typography variant="h1">TaskMora</Typography>
          <Box mt={4} />
          {!user && (
            <Typography variant="h2">
              Organize yourself and be more productive
            </Typography>
          )}

          <Box mt={4} />
          {user ? (
            <CTMButton variant="outlined" onClick={() => history.push(URL.APP)}>
              Go to the app
            </CTMButton>
          ) : (
            <CTMButton
              variant="outlined"
              onClick={() => signInWithGoogleAction(history)(dispatch)}
            >
              Sign In
            </CTMButton>
          )}
        </Box>
      </Box>
      {isBigScreen && <TodoSVG src={CodeSvg} />}
    </Box>
  )
}

export default HomePage
