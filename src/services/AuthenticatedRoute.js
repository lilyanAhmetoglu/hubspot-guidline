import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";


class AuthenticatedRoute extends Component {
  render() {
    if (JSON.parse(sessionStorage.getItem("token"))) {
      return <Route {...this.props} />;
    } else {
      return <Redirect to="/login" />;
    }
  }
}

export default AuthenticatedRoute;