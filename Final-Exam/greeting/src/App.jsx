import "./App.css";
import { useState } from "react"
import Greeting from "./Greeting"

function App() {

  let [greeting , setGreeting] = useState("Hello stranger !");
  let [name , setName] = useState("")

  const greet = ()=>{
    if(name){
      let first = name.slice(0,1).toUpperCase()
      let remaining = name.slice(1).toLowerCase()
      name = first+remaining
      setGreeting(`Hello,  how are you ${name}!`)
    }
    else{
      setGreeting("Hello stranger !")
    }
  }

  return (
    <div className="App">
          <Greeting greeting={greeting}/>
          <input className="input" placeholder="Enter your name " type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
          <button className="btn" onClick={greet}>Enter</button>
    </div>
  );
}

export default App;
