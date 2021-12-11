import {createStore, applyMiddleware} from "redux"
import MultipleReducer from "./MutipleReducer"
import logger from "redux-logger"
import { composeWithDevTools } from 'redux-devtools-extension';

const Store = createStore(MultipleReducer, composeWithDevTools(applyMiddleware(logger)) )

export default Store