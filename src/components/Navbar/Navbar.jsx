import React from "react"
import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { signInWithGoogleAction, signOutAction } from "redux/ducks/userDuck"
import { useHistory } from "react-router-dom"

const Navbar = () => {
  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const history = useHistory()

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          TaskMora
        </Typography>
        {user ? (
          <Button
            color="inherit"
            onClick={() => signOutAction(history)(dispatch)}
          >
            Log Out
          </Button>
        ) : (
          <Button
            color="inherit"
            onClick={() => signInWithGoogleAction(history)(dispatch)}
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
