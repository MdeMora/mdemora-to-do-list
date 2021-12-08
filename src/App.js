import React from "react"
import { Box } from "@mui/material"
import Footer from "components/Footer"
import { BrowserRouter as Router } from "react-router-dom"
import Routes from "routes"

const App = () => {
  return (
    <Box display="flex" height="100vh" flexDirection="column">
      <Router>
        <Routes />
        <Footer />
      </Router>
    </Box>
  )
}

export default App
