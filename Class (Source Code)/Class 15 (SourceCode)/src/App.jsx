import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [fullName, setFullName] = useState("")

  const concat = ()=>{
    setFullName(firstName + " " + lastName)
  }

  const clearField = ()=>{
    setFullName("")
    setFirstName("")
    setLastName("")
  }

  return (
    <>

      <h1>{count}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
          <button onClick={() => setCount((count) => (count == 0 ? 0 : count - 1))}>
          Decrement
        </button>
      </div>

      <input type="text" placeholder="Enter your First Name : " value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} />
      <input type="text" placeholder="Enter your Last Name : " value={lastName} onChange={(e)=>{setLastName(e.target.value)}} />

          <div>
            <button onClick={concat}>Full Name</button>
            <button onClick={clearField}>Clear</button>
          </div>
        
        <h1>{fullName}</h1>

    </>
  )
}

export default App
