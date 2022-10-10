import React from "react";
import Joke from "./Joke";
import jokesData from "./jokesData";

export default function App() {
console.log(jokesData)
  const jokeElements = jokesData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />;
  });


  return <>{jokeElements}</>;
}
