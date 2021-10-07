import React from "react"
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { useSelector, useDispatch } from "react-redux"
import { signInWithGoogleAction, signOutAction } from "redux/ducks/userDuck"
import { useHistory } from "react-router-dom"

const Navbar = () => {
  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const history = useHistory()

  console.log(user)

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {user?.name} To-Do List
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
