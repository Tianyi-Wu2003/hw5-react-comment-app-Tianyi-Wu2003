import React, {useState} from 'react'

function Vote () {
    const [vote, setVote] = useState(0)

    return (
        <div className="flex flex-col place-items-end p-4 ">
            <button
                type = "button"
                onClick={() => setVote(vote + 1)}
                className=' text-green-600'
            >
                +
            </button>
            <h2>{vote}</h2>
            <button
                type = "button"
                onClick={() => setVote(vote - 1)}
                className=' text-red-600'
            >
                -
            </button>
        </div>
    )
}

export default Vote