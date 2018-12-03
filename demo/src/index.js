import React, { Component } from "react";
import { render } from "react-dom";
import Example, { WithStoreAndRouter } from "../../src";
import Routes from "./routes";
import { appReducer as app } from "./state";
const ConnectedApp = WithStoreAndRouter({
  reducers: { app }
});

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>dw-app-wrapper Demo</h1>
        <ConnectedApp hasDrawer={true}>
          <Routes {...this.props} />
        </ConnectedApp>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
