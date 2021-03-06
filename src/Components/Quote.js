import React from 'react'

function Quote(props) {
    return (
        <div className="Quote">
            <h1>{ props.quote}</h1>
            <h2>{ `- ${props.author}`}</h2>
        </div>
    )
}

export default Quote