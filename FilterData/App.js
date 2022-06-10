import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [datas, setDatas] = useState(data);

  return (
    <div>
      <List info={datas.filter((fill)=> fill.age>32)}></List>
    </div>
  );
}

export default App;
