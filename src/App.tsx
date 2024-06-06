import Counter from "./components/Counter"
import { useContext  } from "react"
import { CounterContext } from "./context/Counter"

const App = () => {
  const CounterState = useContext(CounterContext)
  return (
    <>
      <h1>Context Api</h1>
      <h3>count is {CounterState.count}</h3>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </>
  )
}

export default App