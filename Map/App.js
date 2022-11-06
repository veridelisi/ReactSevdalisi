import React from "react";
import jokesData from "./jokesData";
import Joke from "./Joke";

export default function App() {

  const jokeElements = jokesData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />;
  });


  return <>{jokeElements}</>;
}
