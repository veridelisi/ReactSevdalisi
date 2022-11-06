import React from "react"

// public/images/twitter.png

export default function Explorer5({index}) {
    return (
        <div>
            <h3>Ad: {index.ad}</h3>
            <p>Yaş: {index.yas}</p>
            <img src={      `./images/${index.picture}`            }
           
        </div>
    )
}
