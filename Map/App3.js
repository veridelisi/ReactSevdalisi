import React from "react";
import Explorer from "./Explorer";
import Data from "./Data";

export default function App3() {

  const Veriler = Data.map((index) => {
    return <Explorer index={index}/>;
  });


  return <>{Veriler}</>;
}
