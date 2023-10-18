import { useSelector } from 'react-redux'

export default function CounterHeading() {

    const count = useSelector((state) => state.counter.value)


  return (
<>
<h1 className="h1">{count}</h1>
</> 

)
}
