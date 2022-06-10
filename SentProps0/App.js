import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [datas, setDatas] = useState(data);

  return (
    <div>
      <List info={datas}></List>
    </div>
  );
}

export default App;
