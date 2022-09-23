import React from "react";
import Joke from "./Joke";
import jokesData from "./jokesData";

export default function App() {
console.log(jokesData)
  const jokeElements = jokesData.map((joke) => {
    return <Joke info={joke.setup} info2={joke.punchline} />;
  });


  return <>{jokeElements}</>;
}
