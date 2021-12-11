import { combineReducers } from "redux";
import cakeReducer from "./cakes/CakeReducer";
import iceReducer from "./Icecream/IcecreamReducer";

const MultipleReducer = combineReducers({
    cake:cakeReducer,
    icecream:iceReducer
})

export default MultipleReducer