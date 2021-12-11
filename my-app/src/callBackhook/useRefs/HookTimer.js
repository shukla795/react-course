import React , {useState , useEffect , useRef} from 'react'

function HookTimer() {
    const [timer , setTimer] = useState(0)
    const interval = useRef()
     useEffect(() => {
        interval.current  = setInterval(()=>{
             setTimer(prevtimer => prevtimer+1)
         },500)
         return () => {
             clearInterval(interval.current)
         }
     }, [])

    return (
        <div>
            hookTimer-{timer}
            <button onClick={()=>clearInterval(interval.current)} >clear timer</button>
        </div>
    )
}

export default HookTimer
