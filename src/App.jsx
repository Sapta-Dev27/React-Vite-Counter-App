import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)

  const addValue = () => {
    setCounter(counter + 1)
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }
  return (

    
      <div className='container'>
        <h1>This is a React + Vite Project of a Counter App </h1>
        <h2>Hello , I am Saptarshi ...</h2>
        <h3>Check Out This Counter App Project</h3>

        <h1>The Present  Value is : {counter} </h1>

        <button onClick={addValue} > Add Value : {counter}</button>
        <button onClick={removeValue}   >Remove Value : {counter}</button>

        <p>The Result is : {counter}</p>
      </div>
  



  )


}

export default App
