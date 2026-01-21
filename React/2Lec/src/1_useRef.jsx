import { useRef } from 'react'

const App = () => {
  const inpRef = useRef();
  
  function nameHandler(){
    console.log(inpRef.current);
    console.log(inpRef.current.value);
  }

  return (
    <div>Hello Guys
      <br></br>
      <input ref={inpRef} type='text' placeholder='Enter your text...' />
      <button onClick={nameHandler}>Submit</button>
    </div>
  )
}

// let inp = document.querySelector('input');
// let btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//   console.log("Button clicked");
//   console.log(inp.value);
// })
export default App