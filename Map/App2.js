import React from "react";
import Joke from "./Joke";
import jokesData from "./jokesData";

export default function App() {
  console.log(jokesData);

  return (
    <>
      {jokesData.map((index) => {
        return <Joke info={index.setup} info2={index.punchline} />;
      })}
    </>
  );
}
