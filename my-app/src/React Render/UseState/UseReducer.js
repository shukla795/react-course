import React ,{useReducer} from 'react'

 const initialstate = 0;
 const reducer = (state , action) => {
     switch(action){
         case 'Increment':
             return state+1;
         case 'Decrement':
             return state-1;
         case 'reset':
             return initialstate;
         default:
             return state;            
     }
 }

function HookReducers() {
   const [count , dispatch]  = useReducer(reducer , initialstate)

    console.log("useReducer")
    return (
        <div>
            count - {count}
            <button onClick={()=>{dispatch('Increment')}} >Increment</button>
            <button onClick={()=>{dispatch('Decrement')}} >Decrement</button>
            <button onClick={()=>{dispatch('reset')}} >reset</button>
        </div>
    )
}