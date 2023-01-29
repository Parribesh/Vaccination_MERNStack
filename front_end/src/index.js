console.log("To check if everythign is fine");
import React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./application/state/store";
import "./styles.css";

import { App } from "./application/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
