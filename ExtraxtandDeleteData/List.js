import React from "react";

const List = (props) => {
  //const List = ({people}) => {    you can use without
  return (
    <>
      {props.people.map((item) => (
        <div>
          <h3>
            {item.id} . {item.name} | {item.age}
          </h3>
        </div>
      ))}
    </>
  );
};
export default List;
