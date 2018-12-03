import React, { Component } from "react";
import { Route } from "react-router-dom";
class Home extends Component {
  render() {
    return <div>this is a home test</div>;
  }
}
class Routes extends Component {
  render() {
    return [
      <Route
        key={"HomeRoute"}
        exact
        path={`/`}
        render={props => <Home {...this.props} {...props} />}
      />
    ];
  }
}
export default Routes;
