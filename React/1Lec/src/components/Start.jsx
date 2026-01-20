import React from 'react'

const Start = () => {
  const randomNumber = Math.floor(Math.random()*10+1);
  return (
    <div>
     <h1>Game</h1>
     <p>Your Random number is: {randomNumber}</p>
     {randomNumber == 10 ? <p>You win😎</p> : <p>You lose 😢</p>}
     </div>
  )
}

export default Start