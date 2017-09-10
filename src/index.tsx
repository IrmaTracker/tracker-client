import * as React from "react";
import * as ReactDOM from "react-dom";
import Router from "./Router";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "typeface-roboto";

ReactDOM.render(<Router />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
