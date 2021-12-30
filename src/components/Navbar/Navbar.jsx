import React from "react"
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { signInWithGoogleAction, signOutAction } from "redux/ducks/userDuck"
import { useHistory } from "react-router-dom"

import LogoutIcon from "@mui/icons-material/Logout"

const Navbar = () => {
  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const history = useHistory()
  const theme = useTheme()

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "white" }}
        >
          TaskMora
        </Typography>
        {user ? (
          <Button
            color="inherit"
            onClick={() => signOutAction(history)(dispatch)}
            sx={{
              ...theme.typography.subtitle2,
              fontWeight: "bold",
              textTransform: "capitalize",
              color: "white",
            }}
          >
            Sign Out
            <Box ml={1} display="flex" alignItems="center">
              <LogoutIcon />
            </Box>
          </Button>
        ) : (
          <Button
            color="inherit"
            onClick={() => signInWithGoogleAction(history)(dispatch)}
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
