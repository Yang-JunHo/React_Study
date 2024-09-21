import React from 'react'

const Board = ({name, Dicenum}) => {
  return (
    <div>
        <h3 className='board-area'> {name} </h3>
        <img src={`/img/dice${Dicenum}.png`}></img>
    </div>
  )
}

export default Board