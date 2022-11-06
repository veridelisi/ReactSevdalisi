
import React from "react";
import Explorer from "./Explorer";
import Data from "./Data";

export default function App4() {

  const Veriler = Data.map((index) => {
    return <Explorer {...index}/>;
  });


  return <>{Veriler}</>;
}
