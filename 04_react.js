App.js

// https://jsbin.com/cumopab/edit?js,output

import React from 'react';

class App extends React.Component {
  render(){
    return (
    
    <div>
    <Button>I <Heart /> React</Button>
    <br />
    <br/>
    
    <Button>I love  <Euro /></Button>
   </div>
    )
  }
}

const Button = (props) =>
  <button>{props.children}</button>

class Heart extends React.Component {
  render(){
    return <span>&hearts;</span>
  }
}

class Euro extends React.Component {
  render() {
    return <span>&#127817;</span>
  }
}


index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(<App />, document.getElementById('app'));



index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Lesson 07</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
</head>
<body>
  <div id="app"></div>
  <script src="index.js"></script>
</body>
</html>
