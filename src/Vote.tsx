import React, {useState} from 'react'

function Vote () {
    const [vote, setVote] = useState(0)

    return (
        <div>
            <button
                type = "button"
                onClick={() => setVote(vote + 1)}
            >
                +
            </button>
            <h2>{vote}</h2>
            <button
                type = "button"
                onClick={() => setVote(vote - 1)}
            >
                -
            </button>
        </div>
    )
}

export default Vote