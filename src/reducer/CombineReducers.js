import { combineReducers } from "redux";
//import connectWalletReducer from "./connectWalletReducer";
import hasWalletReducer from "./hasWalletReducer";
import addressReducer from "./addressReducer";
import candidateReducer from "./candidatesReducer";
import deployerReducer from "./deployerReducer";
import registeringReducer from "./registeringReducer";
import candidateRegReducer from "./candidateRegReducer";

const allReducers = combineReducers(
    {
        //connectWalletReducer,
        hasWalletReducer,
        addressReducer,
        candidateReducer,
        deployerReducer, 
        registeringReducer,
        candidateRegReducer
    }
)

export default allReducers