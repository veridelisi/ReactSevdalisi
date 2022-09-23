import React from "react";

export default function Joke({ setup }) {
  return (
    <>
      {setup && <h3>{setup}</h3>}

      <hr />
    </>
  );
}
