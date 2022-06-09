import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  //Import data to the usestate
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      {questions.map((question) => {
        return <SingleQuestion key={question.id} {...question} />;
      })}
    </main>
  );
}

export default App;
