import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// React components
const JsxHeading = () => (
  <h1 id="heading" tabIndex="5">
    Namaste React using React heading component
  </h1>
);

const JsxParagraph = () => (
  <p id="paragraph" tabIndex="5">
    paragraph component
  </p>
);

const JsxContainer = () => (
  <div>
    <JsxHeading />
    <JsxParagraph />
  </div>
);

// rendering react objects using react
root.render(<JsxContainer />);
