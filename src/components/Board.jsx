import React, { useState } from 'react'
import Square from './Square'

function Board() {

    const [isxTurn, setIsXTurn] = useState(true)
    const [state, setState] = useState(Array(9).fill(null))
    const [boxAlreadyClicked, setBoxAlreadyClicked] = useState(Array(9).fill(null))

    function checkWinner() {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6,]

        ]

        for (let logic of winnerLogic) {
            const [a, b, c] = logic
            if (state[a] !== null && state[b] !== null && state[c] !== null) {
                if (state[a] === state[b] && state[b] === state[c]) {
                    return true;
                }
            }
        }
        return false;
    }

    const isWinner = checkWinner()

    function handleClick(i) {
        if (boxAlreadyClicked[i]) {
            return;
        }

        const copyState = [...state];
        copyState[i] = isxTurn ? 'X' : 'O'
        setState(copyState)
        setIsXTurn(!isxTurn)
        const copyBoxState = [...boxAlreadyClicked]
        copyBoxState[i] = true
        setBoxAlreadyClicked(copyBoxState)

        // console.log("clicked on ->", i)
    }

    return (
        <>
            {isWinner ? <h1>Someone Won 😊</h1> :
                <>
                    <h3>Cuurent turn {isxTurn ? "X" : "O"}</h3>
                    <div className='board-container'>
                        <div className="board-row">
                            <Square onClick={() => handleClick(0)} value={state[0]} />
                            <Square onClick={() => handleClick(1)} value={state[1]} />
                            <Square onClick={() => handleClick(2)} value={state[2]} />
                        </div>
                        <div className="board-row">
                            <Square onClick={() => handleClick(3)} value={state[3]} />
                            <Square onClick={() => handleClick(4)} value={state[4]} />
                            <Square onClick={() => handleClick(5)} value={state[5]} />
                        </div>
                        <div className="board-row">
                            <Square onClick={() => handleClick(6)} value={state[6]} />
                            <Square onClick={() => handleClick(7)} value={state[7]} />
                            <Square onClick={() => handleClick(8)} value={state[8]} />
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Board