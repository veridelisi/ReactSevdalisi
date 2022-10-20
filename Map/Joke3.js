import React from "react"

export default function Joke({index}) {
    return (
        <div>
            <h3>Setup: {index.setup}</h3>
            <p>Punchline: {index.punchline}</p>
           
        </div>
    )
}
