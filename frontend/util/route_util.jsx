import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/home" />
    )
  )}/>
);
const Protected = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )}/>
);



const msp = state => {
  return {loggedIn: Boolean(state.session.userId)};
};

export const AuthRoute = withRouter(connect(msp, null)(Auth));

export const ProtectedRoute = withRouter(connect(msp, null)(Protected));
