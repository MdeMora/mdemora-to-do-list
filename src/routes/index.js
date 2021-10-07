import React, { useEffect } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import URL from "constants/navigation"

import HomePage from "pages/HomePage"
import TasksPage from "pages/TasksPage"

const Routes = () => {
  const { user } = useSelector(state => state.user)
  const history = useHistory()

  useEffect(() => {
    if (!user) history.push("/")
  }, [history])
  return (
    <Switch>
      {/* home route */}
      <Route path={URL.HOME} component={HomePage} exact />
      <Route path={URL.APP} component={TasksPage} exact />
      {/* This makes sure that every url is redirected to the home page */}
      <Route path="*">
        <Redirect to={URL.HOME} />
      </Route>
    </Switch>
  )
}

export default Routes
