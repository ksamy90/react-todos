"use strict";

// JSX - javascript xml
var app = {
  title: "Todos React",
  subtitle: "things to focus on",
  options: ["writing", "designing", "research", "sports"]
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? "here are your options" : "no options"
  ),
  React.createElement(
    "ul",
    null,
    React.createElement(
      "li",
      null,
      app.options[0]
    ),
    React.createElement(
      "li",
      null,
      app.options[1]
    ),
    React.createElement(
      "li",
      null,
      app.options[2]
    ),
    React.createElement(
      "li",
      null,
      app.options[3]
    )
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
