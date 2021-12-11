import React, { useReducer } from 'react'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

export const CountContext = React.createContext()

const initialstate = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'Increment':
            return state + 1;
        case 'Decrement':
            return state - 1;
        case 'reset':
            return initialstate;
        default:
            return state;
    }
}

export default function StateWithContext() {
    const [count, dispatch] = useReducer(reducer, initialstate);
    return (
        <div>
            count-{count}
            <CountContext value={{countstate:count , countdispatch:dispatch}} >
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </CountContext>
        </div>
    )
}
