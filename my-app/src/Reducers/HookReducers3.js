import React ,{useReducer} from 'react'

//  if we have multiple state variables & also we have to do same transitions... that time we can use multiple reducers...

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
   const [count2 , dispatch2]  = useReducer(reducer , initialstate)

    return (
        <div>
            count - {count}
            <button onClick={()=>{dispatch('Increment')}} >Increment</button>
            <button onClick={()=>{dispatch('Decrement')}} >Decrement</button>
            <button onClick={()=>{dispatch('reset')}} >reset</button>

            count - {count2}
            <button onClick={()=>{dispatch2('Increment')}} >Increment</button>
            <button onClick={()=>{dispatch2('Decrement')}} >Decrement</button>
            <button onClick={()=>{dispatch2('reset')}} >reset</button>
        </div>
    )
}

export default HookReducers
// both count behave independently