import Navbar from "components/Navbar"
import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Routes from "routes"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes />
      {/* <Footer /> */}
    </Router>
  )
}

export default App
