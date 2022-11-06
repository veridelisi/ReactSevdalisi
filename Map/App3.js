import React from "react";
import Joke from "./Joke";
import jokesData from "./jokesData";

export default function App() {


  return (
    <>
      {jokesData.map((index) => {
        return <Joke index={index} />;
      })}
    </>
  );
}
