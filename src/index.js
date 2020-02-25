import React from "react";
import { render } from "enzyme";

function Hi() {
  return <p>Hi,</p>;
}

render(<Hi />, document.getElementById("app"));
