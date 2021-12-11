import React,{useState} from 'react'
// import ChildOne from "./ChildOne"


export const ParentOne = ({children}) => {
   const [count , setCount ] = useState(0);
   console.log("parent render");
    return (
        <div>
            <button onClick={()=>setCount(c=>c+1)} >count-{count}</button>
            {/* <ChildOne /> */}
            children
        </div>
    )
}


// here child component send as children props