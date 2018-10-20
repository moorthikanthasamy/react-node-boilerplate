import { render } from "react-dom";
import React from "react";
import Dashboard from "./dashboard/components/dashboard/dashboard.component";
import { Provider } from "react-redux";
import store from "../app/dashboard/store/reducers/dashboard.reducer";

import "antd/dist/antd.css";
import "../assets/css/style.css";

const initApp = () => {
  console.log("initApp called");
  render(
    <Provider store={store}>
      <Dashboard />
    </Provider>,
    document.getElementById("root")
  );
};

initApp();
