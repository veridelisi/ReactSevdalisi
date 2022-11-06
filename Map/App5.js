import React from "react";
import Explorer from "./Explorer";
import Data from "./Data";

export default function App5() {

  const Veriler = Data.map((index) => {
    return <Explorer index={index}/>;
  });


  return <>{Veriler}</>;
}
