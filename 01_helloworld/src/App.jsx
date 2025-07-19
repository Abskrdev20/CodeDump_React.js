import { useState } from 'react'
import Coffee from './Coffee'

function App() {
  const username = "Abhishek Kumar"
  return (
    <>
    <h1>React with Vite | {username}</h1>
    <Coffee/>
    </>
  )
}

export default App
