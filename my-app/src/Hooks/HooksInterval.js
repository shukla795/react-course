import React , {useState ,useEffect} from 'react'

function HooksInterval() {
    const [count , setCount] = useState(0)
    
     useEffect(()=>{
       const interval = setInterval(()=>{
          setCount(count+1)
        },2000)
        return()=>{
            clearInterval(interval)
        }
     },[count])

    //  if we increase the count by function way , that time we dont need to add dependency in array in useEffect 

    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default HooksInterval
