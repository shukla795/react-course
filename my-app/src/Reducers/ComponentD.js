import React , {useContext} from 'react'
import {CountContext} from "./StateWithContext";
export default function ComponentD() {
    const countContext = useContext(CountContext);
    return (
        <div>
            ComponentD
            
            <button onClick={()=>{countContext.countdispatch('Increment')}} >Increment</button>
            <button onClick={()=>{countContext.countdispatch('Decrement')}} >Decrement</button>
            <button onClick={()=>{countContext.countdispatch('reset')}} >reset</button>
        </div>
    )
}