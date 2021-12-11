const redux = require('redux');
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const ICE_CREAM = 'ICE_CREAM'

function buycake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function icecream() {
    return {
        type: ICE_CREAM,
        info: 'First redux action'
    }
}

const initialcakestate = {
    numOfCakes: 10
}

const initialicestate = {
    numOfIcecream: 20
}


const cakeReducer = (state = initialcakestate, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                // first copy the state after change in state
                ...state,
                numOfCakes: state.numOfCakes - 1
            }

        default:
            return state
    }
}

const iceReducer = (state = initialicestate, action) => {
    switch (action.type) {
        case ICE_CREAM:
            return {
                // first copy the state after change in state
                ...state,
                numOfIcecream: state.numOfIcecream - 1
            }

        default:
            return state
    }
}

// combine reducers takes object
const rootReducers  = combineReducers({
    cake:cakeReducer,
    icecream:iceReducer
})

const store = createStore(rootReducers)
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))

store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(icecream())
store.dispatch(icecream())
store.dispatch(icecream())

unsubscribe()
