import React from "react";
import Explorer from "./Explorer";
import Data from "./Data";

export default function App2() {

  const Veriler = Data.map((index) => {
    return <Explorer ad={index.ad} yas={index.yas} />;
  });


  return <>{Veriler}</>;
}
