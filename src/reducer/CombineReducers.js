import { combineReducers } from "redux";
//import connectWalletReducer from "./connectWalletReducer";
import hasWalletReducer from "./hasWalletReducer";
import addressReducer from "./addressReducer";
import candidateReducer from "./candidatesReducer";
import web3Reducer from "./web3Reducer";
import deployerReducer from "./deployerReducer";

const allReducers = combineReducers(
    {
        //connectWalletReducer,
        hasWalletReducer,
        addressReducer,
        candidateReducer,
        deployerReducer
    }
)

export default allReducers