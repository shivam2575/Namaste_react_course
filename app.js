{
  /* <div id="parent">
  <div id="child1">
    <h1 id="head1"></h1>
    <p id="para1"></p>
  </div>
  <div id="child2">
    <h1 id="head2"></h1>
    <p id="para2"></p>
  </div>
</div>; */
}

const nestedEle = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "head1" }, "This is heading of child 1"),
    React.createElement("p", { id: "para1" }, "This is paragraph of child 1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "head2" }, "This is heading of child 2"),
    React.createElement("p", { id: "para2" }, "This is paragraph of child 2"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World Using React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nestedEle);
