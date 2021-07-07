import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { paths } from '../App'

export const PrivateRoute = ({ children, ...rest }) => {
  const user = localStorage.getItem('userData')

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <>
            <Redirect
              to={{
                pathname: paths.LOGIN,
                state: { from: location },
              }}
            />
          </>
        )
      }
    />
  )
}