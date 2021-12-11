import { BUY_CAKE } from "./CakeTypes"

const initialcakestate = {
    numOfCakes: 10
}


const cakeReducer = (state = initialcakestate, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                // first copy the state after change in state
                ...state,
                numOfCakes: state.numOfCakes - action.payload
            }

        default:
            return state
    }
}

export default cakeReducer