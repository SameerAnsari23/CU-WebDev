import React from 'react'
import { useState } from 'react'

const App = () => {
  const [inp, setInp] = useState("");

 function change(e) {
  console.log(e.target.value);
 }

  return (

    <div>Hello Guys
      <br></br>
      {/* <input onChange={change} type='text' placeholder='Enter your text...' /> */}
      <input onChange={(e) => console.log(e.target.value)} type='text' placeholder='Enter your text...' />
      <button>Submit</button>

    </div>
  )
}

export default App