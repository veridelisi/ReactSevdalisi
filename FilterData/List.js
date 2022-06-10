import React from "react";

const List = (props) => {
  const info = props.info;
  return (
    <>
    
    {info.map( (item) => (
    
    <>
    <h1>{item.name} </h1>
    <h2>{item.age} </h2>
    </>
    
    ))}

    </>
  );
};

export default List;
