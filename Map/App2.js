import React from "react";
import Joke from "./Joke";
import jokesData from "./jokesData";

export default function App() {
  console.log(jokesData);

  return (
    <>
      {jokesData.map((index) => {
        return <Joke setup={index.setup} punchline={index.punchline} />;
      })}
    </>
  );
}
