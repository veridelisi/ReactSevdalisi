import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [datas, setDatas] = useState(data);

  return (
    <div>
      {datas.map((item)=> (
        <List key={item.id} {...item}></List>
      ))}
      
    </div>
  );
}

export default App;
