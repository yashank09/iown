import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({ component: Component, isUserLogged, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isUserLogged === true ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

const mapStateToProps = state => {
  return {
    isUserLogged: state.user.isUserLogged
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
