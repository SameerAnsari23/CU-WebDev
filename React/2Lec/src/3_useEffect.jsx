import React from 'react'
import { useEffect, useState } from 'react'

const App = () => {
  const [cnt, setCnt] = useState(0);
  
  let int = 0;
  console.log("App component rendered");

  useEffect(() => {
    console.log("useEffect called");
  }, [cnt])

  return (
    <div>
      Count: {cnt}
      <br></br>
      <button onClick={() => setCnt(cnt + 1)}>inc</button>
    </div>
  )
}

export default App