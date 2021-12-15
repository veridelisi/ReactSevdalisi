Child.js


import React from "react";

function Child() {

    return (
        <div >
            <Merhaba name="Engin">

                <h3>Ben child ım!</h3>
            </Merhaba>


        </div>
    );
}

function Merhaba(props) {
    return (
        <div>
            <h3>Hoşgeldiniz {props.name}</h3>
            <h4>{props.children}</h4>
        </div>

    )
}
export default Child;



index.js

import React from 'react';
import ReactDOM from 'react-dom';

import Child from './Child';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
  <React.StrictMode>
    <Child />
  </React.StrictMode>,
  document.getElementById('root')
);



index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    
    <title>React App</title>
  </head>
  <body>
   
    <div id="root"></div>
   
  </body>
</html>


