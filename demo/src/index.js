import React, { Component } from "react";
import { render } from "react-dom";

import Example from "../../src";

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>dw-app-wrapper Demo</h1>
        <Example hasDrawer={true} />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
