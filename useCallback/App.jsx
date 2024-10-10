import { useState, useRef, useMemo, useCallback } from 'react'

import './App.css'
import Child from './Child';

function App() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [])  // it will get freeze but also doesnot get rerender ,
  // if we will make anothe state and which gets changes and we set the dependencies [count] in the function then we found that only when the setcount function change then it will re render

  return (
    // TO prevent the function to be done again and again unnecessary
    <>
      <div>
        Count:{count}
      </div>
      <br />

      <button onClick={handleClick}>
        Increment
      </button>

      <div>
        <Child name="Click ME" func={handleClick} />

      </div>
    </>
  )
}

export default App
