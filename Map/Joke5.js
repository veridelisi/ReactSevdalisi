import React from "react"

// public/images/twitter.png

export default function Joke({setup, punchline,picture}) {
    return (
        <div>
            <h3>Setup: {setup}</h3>
            <p>Punchline: {punchline}</p>
            <img src={      `./images/${picture}`            }
           
        </div>
    )
}
