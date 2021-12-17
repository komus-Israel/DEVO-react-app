import { combineReducers } from "redux";
//import connectWalletReducer from "./connectWalletReducer";
import hasWalletReducer from "./hasWalletReducer";
import addressReducer from "./addressReducer";
import candidateReducer from "./candidatesReducer";
import deployerReducer from "./deployerReducer";
import registeringReducer from "./registeringReducer";
import RegReducer from "./RegReducer";
import ipfsReducer from "./ipfsReducer";

const allReducers = combineReducers(
    {
        //connectWalletReducer,
        hasWalletReducer,
        addressReducer,
        candidateReducer,
        deployerReducer, 
        registeringReducer,
        RegReducer,
        ipfsReducer
    }
)

export default allReducers