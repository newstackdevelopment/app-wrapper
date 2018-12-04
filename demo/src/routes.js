import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { WrapperActions } from "../../src";
const { drawerActions } = WrapperActions;

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  setItems: menuItems =>
    dispatch(
      drawerActions.updateMenuItems([
        { name: "about", title: "About", path: "/about" }
      ])
    )
});

class Home extends Component {
  componentDidMount() {
    console.log("here");
    this.props.setItems();
  }
  render() {
    return <div>this is a home test</div>;
  }
}
const ConnectedHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

class About extends Component {
  render() {
    return <div>this is the about page</div>;
  }
}

class Routes extends Component {
  render() {
    return (
      <div>
        <Route
          key={"HomeRoute"}
          exact
          path={`/`}
          render={props => <ConnectedHome {...this.props} {...props} />}
        />
        ,
        <Route
          key={"AboutRoute"}
          exact
          path={`/about`}
          render={props => <About {...this.props} {...props} />}
        />
      </div>
    );
  }
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Routes)
);
