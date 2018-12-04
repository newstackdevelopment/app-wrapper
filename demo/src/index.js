import React, { Component } from "react";
import { render } from "react-dom";
import Example, { WithStoreAndRouter, DwForm } from "../../src";
import Routes from "./routes";
import { appReducer as app } from "./state";
import formData from "./dummyFormData.json";
const formFields = [
  {
    name: "name",
    title: "Full Name"
  }
];
const ConnectedApp = WithStoreAndRouter({
  reducers: { app }
});

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>dw-app-wrapper Demo</h1>
        <ConnectedApp hasDrawer={true} hasBreadcrumb={true}>
          <Routes {...this.props} />
          <DwForm fields={formFields} model={formData} />
        </ConnectedApp>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
