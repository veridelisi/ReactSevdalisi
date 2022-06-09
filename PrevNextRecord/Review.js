import React, { useState } from "react";
import data from "./data";

const Review = () => {
  //State
  const [index, setIndex] = useState(0);

  //We extract data and use with state. This is very short method
  const { name, job, image, text } = data[index];

  //{data[index].name} This is long version in render

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  //Control the number for boundries
  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };

  return (
    <article>
      <img src={image} alt={data[index].name} height="150" width="150" />

      <h4>{name}</h4>
      <h3>{job}</h3>
      <p>{text}</p>
      <div>
        <button onClick={prevPerson}>Prev</button>
        <button>{index}</button>
        <button onClick={nextPerson}>Next</button>
      </div>
    </article>
  );
};

export default Review;
