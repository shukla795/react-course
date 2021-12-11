import React,{useState} from 'react'
import Child from "./Child"
export const UseState = () => {
   const [count , setCount ] = useState(0);
   console.log("parent render");
    return (
        <div>
            <button onClick={()=>setCount(c=>c+1)} >count-{count}</button>
            <button onClick={()=>setCount(0)} >count-{0}</button>
            <button onClick={()=>setCount(c=>c+5)} >count-{5}</button>
            <Child />
        </div>
    )
}
