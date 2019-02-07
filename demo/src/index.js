import React, { Component } from "react";
import { render } from "react-dom";
import Example, { WithStoreAndRouter, DwForm, WrapperActions } from "../../src";
import Routes from "./routes";
import { appReducer as app } from "./state";
import formData from "./dummyFormData.json";
import Logo from "./public/testLogo.png";
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
  // componentDidMount() {
  //   this.props.store.dispatch(
  //     WrapperActions.setHeaderValue({ logo: { src: "./public/testIcon.png" } })
  //   );
  // }
  render() {
    return (
      <div>
        <h1>dw-app-wrapper Card Demo</h1>
        <ConnectedApp
          hasDrawer={true}
          hasBreadcrumb={true}
          // onHeaderSearch={() => {}}
          user={{ firstName: "John", lastName: "Q" }}
          headerProps={{ logo: { src: Logo } }}
          appName={"Really Awesome App"}
          onUserIconClick={() => {
            console.log("clickIcon");
          }}
          // hideDrawerOnClick={false}
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
