import { useState, useRef } from 'react'

import './App.css'

function App() {
  const [time, setTime] = useState(0);
  const timeRef = useRef(null); // here we will initiallize the timeRef to the return value from setinterval as it will perssit to not to get change 

  function handleStart() {
    timeRef.current = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);
  }
  function handleStop() {
    clearInterval(timeRef.current);
  }
  function handleReset() {
    clearInterval(timeRef.current);
    setTime(0);
  }

  return (
    <>
      <h1>StopWatch : {time} seconds</h1>
      <br />
      <br />
      <div >
        <button onClick={handleStart}>Start</button>

      </div>
      <br />
      <br />
      <div >
        <button onClick={handleStop}>Stop</button>

      </div>
      <br />
      <br />
      <div>
        <button onClick={handleReset}>Reset</button>

      </div>
    </>
  )
}

export default App
