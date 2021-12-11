import React , {useEffect ,useRef} from 'react'

export default function Access() {
    const inputref = useRef()
    
    useEffect(()=>{
      inputref.current.focus()
    })

    return (
        <div>
        <input type="text" ref={inputref} />    
        </div>
    )
}
