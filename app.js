import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// // React components
// const JsxHeading = () => (
//   <h1 id="heading" tabIndex="5">
//     Namaste React using React heading component
//   </h1>
// );

// const JsxParagraph = () => (
//   <p id="paragraph" tabIndex="5">
//     paragraph component
//   </p>
// );

// const JsxContainer = () => (
//   <div>
//     <JsxHeading />
//     <JsxParagraph />
//   </div>
// );

// // rendering react objects using react
// root.render(<JsxContainer />);

// ASSIGNMENT EPISODE - 3

// task 1

// ● Create a Nested header Element using React.createElement(h1,h2,h3 inside a
//     div with class “title”)
//     ○ Create the same element using JSX
//     ○ Create a functional component of the same with JSX
//     ○ Pass attributes into the tag in JSX
//     ○ Composition of Component(Add a component inside another)
//     ○ {TitleComponent} vs {<TitleComponent/>} vs
//     {<TitleComponent></TitleComponent>} in JSX

//using react
const header = React.createElement("div", { class: "title" }, [
  React.createElement("h1", {}, "react h1 tag"),
  React.createElement("h2", {}, "react h2 tag"),
  React.createElement("h3", {}, "react h3 tag"),
]);

//using jsx
const jsxHeader = (
  <div className="jsx-title">
    <h1>jsx h1</h1>
    <h2>jsx h2</h2>
    <h3>jsx h3</h3>
  </div>
);

// using functional component
const JsxHeaderComponent = () => (
  <div className="header-container">
    <NavBar />
    <div className="component-title">
      <span>using functional component</span>
      <h1>jsx h1</h1>
      <h2>jsx h2</h2>
      <h3>jsx h3</h3>
      <ButtonComponent />
    </div>
  </div>
);

// ● Create a Header Component from scratch using Functional Components with
// JSX
// ○ Add a Logo on left
// ○ Add a search bar in middle
// ○ Add User icon on right
// ○ Add CSS to make it look nice

const Logo = () => (
  <div className="logo-container">
    <img src="/1.png" alt="logo image" />
  </div>
);

const SearchBar = () => (
  <div className="search-container">
    <input type="text"></input>
  </div>
);

const UserIcon = () => (
  <div className="user-container">
    <img src="./sample.jpg" alt="user image" />
  </div>
);

const NavBar = () => (
  <div className="nav-container">
    <Logo />
    <SearchBar />
    <UserIcon />
  </div>
);

const ButtonComponent = () => <button>Click me</button>;
root.render(<JsxHeaderComponent />);
