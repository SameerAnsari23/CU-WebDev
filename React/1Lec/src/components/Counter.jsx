import React, { useState } from 'react'

const Counter = () => {
 // let cnt = 0;
 const [cnt, setCnt] = useState(0)

 console.log("Counter component rendered");

//  function change() {
//   console.log("Button clicked");
//   setCnt(cnt + 1)
//   console.log(cnt);
//  }

  return (
    <div>
       <h1 id='cnt'>Count: {cnt}</h1>
       {/* <button onClick={change}>Inc</button> */}
       <button onClick={() => setCnt(cnt + 1)}>Inc</button> 
    </div>
  )
}


export default Counter