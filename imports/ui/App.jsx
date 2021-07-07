import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

import { PrivateRoute } from './Auth/PrivateRoute';
import { Login } from './Auth/Login';
import { SignUp } from './Auth/Signup';
import { Dashboard } from './Dashboard'

export const paths = Object.freeze({
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  DASHBOARD: '/dashboard',
})

const routes = (
  <Switch>
    <Route exact path={paths.LOGIN}>
      <Login />
    </Route>
    <Route exact path={paths.SIGNUP}>
      <SignUp />
    </Route>
    <PrivateRoute exact path={paths.DASHBOARD}>
      <Dashboard />
    </PrivateRoute>
    <Redirect from={paths.HOME} to={paths.DASHBOARD} />
  </Switch>
)

const style = {
  height: '100%',
  width: '100%'
}

export const App = () => (
  <div style={style}>
    <Router>
      {routes}
    </Router>
  </div>
);
