import React , {useContext} from 'react'
import {CountContext} from "./StateWithContext";
export default function ComponentA() {
    const countContext = useContext(CountContext);
    return (
        <div>
            ComponentA
            
            <button onClick={()=>{countContext.countdispatch('Increment')}} >Increment</button>
            <button onClick={()=>{countContext.countdispatch('Decrement')}} >Decrement</button>
            <button onClick={()=>{countContext.countdispatch('reset')}} >reset</button>
        </div>
    )
}
