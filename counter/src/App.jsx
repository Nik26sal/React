import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const AddValue = () =>{
    if(count<20){
      setCount(count+1);
    }
  }
  const RemoveValue=()=>{
    if(count>0){
      setCount(count-1);
    }
  }

  return (
    <>
      <h1>This project is made for learning the concept of hooks</h1>
      <p>hooks to use to interact directly with UI. if we want to make change in a variable than in UI where the variable use than it change all the place without taking any refrence...</p>
      <h2>First hooks id useState.It has two parts first is variable and second is function.</h2>
      <h2>Counter:{count}</h2>
      <button onClick={AddValue}>Add Value : {count}</button>
      <button onClick={RemoveValue}>Remove Value : {count}</button>
    </>
  )
}

export default App
