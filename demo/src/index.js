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
        <h1>dw-app-wrapper Card Demo</h1>
        <ConnectedApp
          hasDrawer={true}
          hasBreadcrumb={true}
          theme="dark"
          onHeaderSearch={() => {}}
        >
          <Routes {...this.props} />
          <DwForm fields={formFields} model={formData} />
        </ConnectedApp>
        <h1>dw-app-wrapper fullpage Demo</h1>
        <ConnectedApp
          hasHeader={false}
          hasDrawer={true}
          hasBreadcrumb={true}
          contentStyle={{ background: "#fff" }}
        >
          <Routes {...this.props} />
          <DwForm fields={formFields} model={formData} />
        </ConnectedApp>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
