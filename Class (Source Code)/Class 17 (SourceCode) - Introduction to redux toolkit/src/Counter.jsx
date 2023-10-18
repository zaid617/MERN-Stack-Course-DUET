import { useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import  CounterHeading  from "./CounterHeading"

export default function Counter() {

  const dispatch = useDispatch()

  return (
    <>
    <CounterHeading/>
    <div className="card">
    <button onClick={() => dispatch(increment())}>
      Increment
    </button>
      <button onClick={() => dispatch(decrement())}>
      Decrement
    </button>
    </div>

    </>
  )
}
