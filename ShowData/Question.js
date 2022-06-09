import React, { useState } from "react";

const Question = ({ id, title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article>
      <h4>{title}</h4>{" "}
      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "-" : "+"}
      </button>
      {showInfo && <h6>{info}</h6>}
    </article>
  );
};

export default Question;
