import React from 'react'

const Board_p = ({name, num}) => {
  return (
    <div className='board-area'>
        <h3>{name}</h3>
        <img src={`/img/dice${num}.png`}></img>
    </div>
  )
}

export default Board_p