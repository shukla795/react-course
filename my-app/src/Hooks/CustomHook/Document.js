import React , {useState ,useEffect} from 'react'
import useDocuement from './useDocuement';

export default function Document() {
    const [count , setCount] = useState(0);

     useDocuement(count)

    return (
        <div>
            <button onClick={()=>setCount(count+1)} >count-{count}</button>
        </div>
    )
}
