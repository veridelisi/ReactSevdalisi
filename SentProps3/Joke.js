import React from "react";


export default function Joke(props){

  return (
    <>

    {props.setup &&  <h3>{props.setup}</h3>}
   
    <p>{props.punch}</p>
    <hr />
    
    
    </>
  )
}
