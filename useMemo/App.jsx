import { useState, useRef, useMemo } from 'react'

import './App.css'

function App() {
  // TO PREVENT UNNECESSARY EXPENSIVE TASK TO PERFORM   
  const [count, setCount] = useState(1);
  const [input, setInput] = useState(0);
  function expensivetask(num) {
    // now making it expensive
    for (let i = 0; i < 1000000000; i++) {

    }
    num *= 2;
    return num;
  }

  let val = useMemo(() => expensivetask(input), [input])
  return (
    <>
      <div>
        Value: {count}
      </div>
      <br />

      <button onClick={() => {
        setCount(count + 2);
      }}>
        Increment
      </button>
      <input type="number"
        placeholder='enter number'
        value={input}
        onChange={(e) => {
          setInput(e.target.value)
        }}
      />
      <br />
      double:{val}
    </>
  )
}

export default App
