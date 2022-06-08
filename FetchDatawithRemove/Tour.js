import React from 'react';

const Tour = ({id,name,info,image,price,removeTour}) => {
  return (
    <div key={id}>
    <h4 >{name} </h4>
    <img src={image} alt={name} height="100" width="100" ></img>
    <article>{price}</article>
    <h5>{info}</h5>
    <button onClick={()=> removeTour(id) }    >Remove</button>
    <br></br>

  
    </div>
  )
};

export default Tour;
