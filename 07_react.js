App.js
.....................
import React, {Component} from "react";
import Navi from "./Navi";
import CategoryList from  "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {

state={currentCategory:""}

changeCategory =(category) => {
    this.setState({ currentCategory: category.categoryName });
  };

render(){
let categoryinfo={name:"Category List", time:"Est"};
let productinfo= {name: "Product List", time:"Euro"};
return (
<div >
      <Container>

      <Row>

      <Col xs="3"> 
      <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryinfo}/></Col>
   
     <Col xs="9"><ProductList currentCategory={this.state.currentCategory} info={productinfo}/></Col>
   
       </Row>
       
      <Row><Navi/></Row>
       
       </Container>
    </div>


)

}
}


CategoryList.js
........................................

import React, { Component} from 'react';
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {

  state = {
    categories: [
      { categoryId: 1, categoryName: "Beverage " },
      { categoryId: 2, categoryName: "Condiments" }
    ]
  }

  

  render() {
    return (


      <div>
        <h1>{this.props.info.name}<h2>{this.props.info.time}</h2></h1>
        <ListGroup>

          {
            this.state.categories.map(category => (

              <ListGroupItem onClick={() => this.props.changeCategory(category)} key={category.categoryId} >{category.categoryName}

              </ListGroupItem>

            )

            )

          }

        </ListGroup>
        <h4>{this.props.currentCategory}</h4>

      </div>
    )
  }
}


index.js
.........................
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



ProductList.js
...............................

import React, { Component } from 'react'
import { Toast,ToastHeader , ToastBody} from 'reactstrap'

export default class ProductList extends Component {
    render() {
        return (
            <div>
            <h1>{this.props.info.name}-{this.props.currentCategory} <h2>{this.props.info.time}</h2></h1>
          
            <div className="p-3 my-2 rounded">
            <Toast>
              <ToastHeader>
                Reactstrap
              </ToastHeader>
              <ToastBody>
                This is a toast on a white background — check it out!
              </ToastBody>
            </Toast>
          </div>
          <div className="p-3 my-2 rounded bg-docs-transparent-grid">
            <Toast>
              <ToastHeader>
                Reactstrap
              </ToastHeader>
              <ToastBody>
                This is a toast on a gridded background — check it out!
              </ToastBody>
            </Toast>
          </div>

         
            </div>
        )
    }
}

Navi.js
.................................
import React, { Component } from 'react'

export default class Navi extends Component {
    render() {
        return (
            <div>
            <h2>cam</h2>
                
            </div>
        )
    }
}

index.html
...............................
<!DOCTYPE html>
<html lang="en">
  <head>
  
  </head>
  <body>
  
    <div id="root"></div>
  
  </body>
</html>
