import { useState, useRef } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  let x = 1; // for every change in state it get re render and doesnot persist its value so to persist its value we will  use the useref
  let val = useRef(0);  // initial value 0 and it is now and object and its value is stored in the val.current we can't access it directly

  function handleClick() {
    setCount(count + 1);
    x = x + 1;
    // val.current = val.current + 1;
    val.current = val.current + 1;
  }

  let btnref = useRef();
  function changeColor() {
    btnref.current.style.backgroundColor = 'red';
  }

  return (
    <>
      <div>
        <button ref={btnref} onClick={handleClick}>
          Increament
        </button>
      </div>
      <div>
        <p>State value: {count}</p>
        <p>Without useRef (resets each render): {x}</p>
        <p>With useRef (persistent across renders): {val.current}</p>

      </div>
      <div>
        Now I want to change the bg colour of Increament button by clicking on the below button <br />
        let's see how it will be done using the useref()
        <br /><br />

        <button onClick={changeColor}>
          Change Color of Button 1
        </button>
      </div>
    </>
  )
}

export default App
