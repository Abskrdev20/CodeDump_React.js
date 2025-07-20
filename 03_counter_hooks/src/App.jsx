import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 0
  let [counter,setCounter] = useState(0)

  const addValue = function() {
  setCounter(counter+1)    
  }
  const removeValue = function() {
  setCounter(counter-1)    
  }

  return (
    <>
    <h1>Counter value : {counter}</h1>
    <button
    onClick={addValue}>
      Add val {counter}
      </button>

    <button
    onClick={removeValue}>
      Remove val {counter}
      </button>
    </>

  )
}

export default App
