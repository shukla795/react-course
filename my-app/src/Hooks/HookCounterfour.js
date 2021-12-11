import React ,{useState , useEffect} from 'react'

function HookCounterfour() {
    const [count ,setCount] = useState(0)
    const [Name , setName] = useState('')
    //  useEffect runs after every render

    useEffect(()=>{
        document.title = `you click ${count}`
    },[count])
   
    // we can define the second parameter is either props or state, if that dependencies will change then useEffect will execute...

    return (
        <div>
            <input type="text" value={Name} onChange={e=>setName(e.target.value)} />
            <button onClick={()=>setCount(count+1)}>click -- {count}</button>
        </div>
    )
}

export default HookCounterfour
