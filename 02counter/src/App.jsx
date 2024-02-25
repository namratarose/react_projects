import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0);

  const addValue = () =>{
    if(count<20)
      setCount(count+1)
  }
  const removeValue = () =>{
    if(count>0)
      setCount(count-1)
  }
  return (
    <>
    <div>
      <h1>Counter</h1>
      <p>The counter value varies from 0 to 20 only.</p>
      <button onClick={addValue}>Increment Counter</button>
      <br />
      <br />
      <button onClick={removeValue}>Decrement Counter</button>
      <br />
      <p>Value of counter is: {count}</p>
    </div>
    </>
  )
}

export default App
