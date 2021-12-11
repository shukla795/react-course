import React  from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { buyCake } from './redux/cakes/CakeAction'

function HookCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>numOfCakes - {numOfCakes} </h2>
            <button onClick={()=>dispatch(buyCake())} >Buy Cake</button>
        </div>
    )
}

export default HookCakeContainer