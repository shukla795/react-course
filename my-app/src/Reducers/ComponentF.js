import React , {useContext} from 'react'
import { CountContext} from "./StateWithContext";
export default function ComponentF() {
    const countContext = useContext(CountContext);
    return (
        <div>
            ComponentF
            
            <button onClick={()=>{countContext.countdispatch('Increment')}} >Increment</button>
            <button onClick={()=>{countContext.countdispatch('Decrement')}} >Decrement</button>
            <button onClick={()=>{countContext.countdispatch('reset')}} >reset</button>
        </div>
    )
}
