import React, { Component } from "react";
import { Layout, WithStore } from "./components";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider, connect } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import dwReducers from "./state/Reducers";
import { DrawerActions, HeaderActions } from "./state/Actions";
const empty = (state = {}, action) => {
  return { ...state, testState: {} };
};
export const WrapperActions = {
  drawerActions: { ...DrawerActions },
  headerActions: HeaderActions
};
export const WithStoreAndRouter = ({
  reducers = { empty },
  middleWare,
  routerProps = {},
  ...otherProps
} = {}) => {
  const combinedReducers = combineReducers({
    ...reducers,
    ...dwReducers
  });
  const configureStore = (initialState = {}) => {
    return createStore(combinedReducers, initialState, applyMiddleware(thunk));
  };
  const configuredStore = configureStore();
  return class extends Component {
    render() {
      return (
        <Provider store={configuredStore}>
          <Router {...routerProps}>
            <WithStore {...this.props}>{this.props.children}</WithStore>
          </Router>
        </Provider>
      );
    }
  };
};

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
export default Layout;
