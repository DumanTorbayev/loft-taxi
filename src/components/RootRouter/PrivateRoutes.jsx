import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {getIsLoggedIn} from '../../store/selectors'
import PropTypes from 'prop-types'
import {routesPath} from './index'

export const PrivateRoute = ({component, exact, path}) => {
  const isLoggedIn = useSelector((state) => getIsLoggedIn(state.auth))

  return isLoggedIn ? (
    <Route component={component} exact={exact} path={path} />
  ) : (
    <Redirect to={routesPath.login} />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
    .isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
}
