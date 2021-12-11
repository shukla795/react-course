const redux = require('redux');
const createStore = redux.createStore

const reduxlogger = require('redux-logger')
const applyMiddleware = redux.applyMiddleware
const logger = reduxlogger.createLogger()

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

// action creater is function & return action object...

const initialstate = {
    numOfCakes: 10,
    numOfIcecream: 20
}

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                // first copy the state after change in state
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
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


const store = createStore(reducer,applyMiddleware(logger))
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => {})
// const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(icecream())
store.dispatch(icecream())
store.dispatch(icecream())

unsubscribe()
