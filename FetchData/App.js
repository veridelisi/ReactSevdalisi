import React, { useState, useEffect } from 'react'
import Tours from "./Tours";

//Source URL link
const url = 'https://course-api.com/react-tours-project'

function App() {

   //State ...We use tours for distributing data.
  const [tours, setTours] = useState([])

  //  We fetch the data from URL
  const fetchTours = async () => {
 
    try {
      const response = await fetch(url)
      const toursdata = await response.json()
      //We set the collecting data to State
      setTours(toursdata)

       } catch (error) {
      console.log(error)
    }
  }
  // For updating
  useEffect(() => {
    fetchTours()
  }, [])
  
 //We sent collecting data Tours page
  return (
    <Tours  toursdata={tours}  ></Tours>
  )
}

export default App;
