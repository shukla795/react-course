import { BUY_ICECREAM } from "./IcecreamTypes"

const initialcakestate = {
    numOfIceCream: 20
}


const iceReducer = (state = initialcakestate, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                // first copy the state after change in state
                ...state,
                numOfIceCream: state.numOfIceCream - 1
            }

        default:
            return state
    }
}

export default iceReducer