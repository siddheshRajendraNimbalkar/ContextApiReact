import { useContext } from "react"
import { CounterContext } from "../context/Counter"

const Counter = () => {
  const CounterState = useContext(CounterContext)
  return (
    <>
      <button onClick={()=>{
        CounterState.setCount(CounterState.count+1);
      }}>INCREAMENT</button>
      <button onClick={()=>{
        CounterState.setCount(CounterState.count-1);
      }}>DECREAMENT</button>
    </>
  )
}

export default Counter