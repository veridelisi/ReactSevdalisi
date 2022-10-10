import React from "react";

export default function Joke({ punchline, setup}) {
  return (
    <>
      {setup && <h3>{setup}</h3>}
      {punchline && <h5>{punchline}</h5>}
      <hr />
    </>
  );
}
