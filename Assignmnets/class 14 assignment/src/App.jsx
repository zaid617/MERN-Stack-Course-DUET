import { useState } from 'react'
import './App.css'

function App() {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const concat = ()=>{
    alert("Name : " + firstName + " " + lastName)
  }



  return (
    <>


      <input type="text" placeholder="Enter your First Name : " value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} />
      <input type="text" placeholder="Enter your Last Name : " value={lastName} onChange={(e)=>{setLastName(e.target.value)}} />

          <div>
            <button onClick={concat}>Full Name</button>
          </div>
        

    </>
  )
}

export default App
