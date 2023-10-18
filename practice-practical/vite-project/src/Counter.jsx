import { useState } from 'react'
import Header from './Header'

export default function Counter() {

    const [count, setCount] = useState(0)


  return (
    <>
    <Header/>
    <h1>{count}</h1>
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount((count) => (count < 1 )? 0 : count - 1)}>
        Decrement
      </button>

    </div>
  </>
  )
}
