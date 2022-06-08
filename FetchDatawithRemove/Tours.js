import React from "react";
import Tour from "./Tour";

const Tours = ({ toursdata,removeTour }) => {
  return (
    <main>
      {toursdata.map((tour) => {
        return (
        <Tour id={tour.id} {...tour} removeTour={removeTour}/>
        )
        
        // <Tour key={tour.id}  name={tour.name} 
        //  price={tour.price} image={tour.image} info={tour.info}></Tour>
       
        
      })}

    </main>
  );
};
export default Tours;
