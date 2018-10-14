import { render } from "react-dom";
import React from "react";
import Header from "../app/components/Header/Header";
const initApp = () => {
  console.log("initApp called");
  render(<Header />, document.getElementById("root"));
};

initApp();
