import React , {useState , useEffect} from 'react'

function HookCounterSix() {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)
     
   const logmouse = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        window.addEventListener('mousemove' , logmouse)

      return() => {
          window.removeEventListener('mousemove',logmouse)
      }

    },[])
    
    // empty array tells us this useEffect runs only initial render...
    // return function is use for componentwillunmout 
    return (
        <div>
         <h1>X-{x} : y-{y}</h1>        
        </div>
    )
}

export default HookCounterSix
