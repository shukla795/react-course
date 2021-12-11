import React,{useState} from 'react'

function HookCounter() {
    const initialcount = 0
   const [count,setCount] =useState(initialcount)

   const increment = () => {
     for(let i=0;i<5;i++){
        //  passed as the function
        setCount(prevcount => prevcount+1)
     }
   }
   
    return (
        <div>
            {/* 1- */}
            {/* <button onClick={() => setCount(count+1)} >Count:{count}</button> */}
             {/* 2- */}
            COUNT : {count}
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={()=>setCount(initialcount)}>Reset</button>
            <button onClick={increment}>Increment 5</button>
        </div>
    )
}

export default HookCounter
