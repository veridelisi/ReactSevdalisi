import React from "react"

// public/images/twitter.png

export default function Joke({index}) {
    return (
        <div>
            <h3>Setup: {index.setup}</h3>
            <p>Punchline: {index.punchline}</p>
            <img src={      `./images/${index.picture}`            }
           
        </div>
    )
}
