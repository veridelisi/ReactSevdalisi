import React from "react";

export default function Joke({ info, info2}) {
  return (
    <>
      {info && <h3>{info}</h3>}
      {info2 && <h5>{info2}</h5>}
      <hr />
    </>
  );
}
