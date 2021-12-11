import React,{useState} from 'react'
import HookCounterSix from './HookCounterSix';

function MouseContainer() {
    const [display,setDisplay] = useState(true);
    return (
        <div>
            <button onClick={()=>setDisplay(!display)} >Hide Mouse area</button>
            {display && <HookCounterSix />}
        </div>
    )
}

export default MouseContainer
