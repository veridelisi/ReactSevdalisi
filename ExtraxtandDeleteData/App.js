import React, { useState } from 'react'
import data from './data'
import List from './List'
const App= ()=> {
  const [people, setPeople] = useState(data)
  return (
 
      <>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear</button>
        <button onClick={()  => setPeople(data)}>Refresh</button>
      </>
   
  )
}

export default App;
