import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({
  isAuthenticate,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={(props) =>
      isAuthenticate ? <Redirect to="/dashboard" /> : <Component {...props} />
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenticate: !!state.auth.uid,
});

export default connect(mapStateToProps)(PublicRoute);
