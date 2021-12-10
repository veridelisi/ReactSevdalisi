app.js

     const Hello = (props) => {
 //const Hello = ({ name, age }) => {
     const name = props.name
     const age = props.age
 //const { name, age } = props



  return (
    <div>
        
      <p>Hello {name}, you are {age} years old</p>
   
    </div>
  )
}

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
