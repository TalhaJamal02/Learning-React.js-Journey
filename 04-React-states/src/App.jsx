import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(1);

  const addValue = () => {
    if (counter >= 20) {
      setCounter(counter + 0)
    }
    else {
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if (counter <= 0) {
      setCounter(counter - 0)
    }
    else {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Learning react <strong>usestate</strong></h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App;
