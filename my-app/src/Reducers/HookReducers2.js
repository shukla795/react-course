import React ,{useReducer} from 'react'
 
// now this time state & action is object & In action also we can also specify value here... In object we can also maintain different counter here..  

 const initialstate = {
     firstcount:0
 }
 const reducer = (state , action) => {
     switch(action.type){
         case 'Increment':
             return {firstcount: state.firstcount+action.value}
         case 'Decrement':
             return {firstcount:state.firstcount-1};
         case 'reset':
             return initialstate;
         default:
             return state;            
     }
 }

function HookReducers2() {
   const [count , dispatch]  = useReducer(reducer , initialstate)

    return (
        <div>
            count - {count.firstcount}
            <button onClick={()=>{dispatch({type:'Increment' , value:5})}} >Increment</button>
            <button onClick={()=>{dispatch({type:'Decrement'})}} >Decrement</button>
            <button onClick={()=>{dispatch({type:'reset'})}} >reset</button>
        </div>
    )
}

export default HookReducers2
