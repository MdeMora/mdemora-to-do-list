import React from "react"
import PropTypes from "prop-types"
import Navbar from "components/Navbar"
import { Route } from "react-router-dom"

const AuthedRoute = ({ component, exact = false, path }) => {
  return (
    <>
      <Navbar />
      <Route path={path} component={component} exact={exact} />
    </>
  )
}

AuthedRoute.propTypes = {
  component: PropTypes.node.isRequired,
  exact: PropTypes.bool,
  path: PropTypes.string
}

export default AuthedRoute
