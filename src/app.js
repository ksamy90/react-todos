// JSX - javascript xml
let app = {
  title: "Todos React",
  subtitle: "things to focus on",
  options: ["writing", "designing", "research", "sports"],
};

let template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <p>{app.options.length > 0 ? "here are your options" : "no options"}</p>
    <ul>
      <li>{app.options[0]}</li>
      <li>{app.options[1]}</li>
      <li>{app.options[2]}</li>
      <li>{app.options[3]}</li>
    </ul>
  </div>
);

let appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
