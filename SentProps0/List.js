import React from "react";

const List = (props) => {
  const info = props.info;
  return (
    <>
      {info.map((item) => (
        <div>
          <h1>{item.id}</h1>
          <p>{item.name}</p>
          <h4>{item.age}</h4>
        </div>
      ))}
    </>
  );
};

export default List;
