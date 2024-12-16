import React from "react";
import ReactDOM from "react-dom/client";

// const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement("div", { id: "heading" }, "Namaste React");

// JSX components
const jsxHeading = (
  <h1 id="jsxHeading" tabIndex="5">
    Namaste React using JSX
  </h1>
);
// rendering react objects using react
root.render(heading);
