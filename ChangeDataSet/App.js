import React, { useState } from "react";
import data from "./data";
import data2 from "./data2";

function App() {
  const [datas, setDatas] = useState(data);

  const dataHandler = () => {
    setDatas(data2);
  };

  const chooseData = (choose) => {
    setDatas(choose);
  };

  return (
    <div>
      {datas.map((item) => (
        <div>
          <h2> {item.id}</h2>
          <h3>{item.name}</h3>
        </div>
      ))}
      <button onClick={dataHandler}>Change the Dataset</button>
      <br></br>
      <button onClick={() => chooseData(data)}>First DataSet</button>
    </div>
  );
}
