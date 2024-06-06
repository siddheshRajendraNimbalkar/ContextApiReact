import { createContext, useState } from 'react';

export const CounterContext = createContext<null | CounterContextType>(null);

export const CounterProvider = (props : any) =>{
    const [count, setCount] = useState(0)
    return <CounterContext.Provider value={{ count, setCount }}>
        {props.children}
    </CounterContext.Provider>
}