import * as React from "react";
import * as ReactDOM from "react-dom";
import Router from "./Router";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Router />, div);
});