import React from 'react'

function WonMeassage() {
  return (
    <div className='success-area'>
      <h1>You won!!</h1>
      <button className='new-game-btn' onClick={()=>window.location.reload()}>New Game</button>
    </div>
  )
}

export default WonMeassage
