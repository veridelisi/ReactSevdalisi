app.js

const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - props.age;
  };

  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

const App = () => {
  const name = "Su";
  const age = 3;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Engin" age={40} />
      <Hello name={name} age={age} />
    </div>
  );
};
export default App;



index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Lesson 01</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="index.js"></script>
  </body>
</html>


index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
ReactDOM.render(<App />, document.getElementById("root"));
