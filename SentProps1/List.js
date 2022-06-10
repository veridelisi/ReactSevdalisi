import React from "react";

const List = ({ id, name, age, image }) => {
  return (
    <>
      <div>
        <p>{id}</p>
        <p>{name}</p>
        <p>{age}</p>
        <p>
          <img src={image} alt={name} height="100" width="100" />
        </p>
      </div>
    </>
  );
};

export default List;
