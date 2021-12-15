import { combineReducers } from "redux";
//import connectWalletReducer from "./connectWalletReducer";
import hasWalletReducer from "./hasWalletReducer";
import addressReducer from "./addressReducer";
import candidateReducer from "./candidatesReducer";
import web3Reducer from "./web3Reducer";

const allReducers = combineReducers(
    {
        //connectWalletReducer,
        hasWalletReducer,
        addressReducer,
        candidateReducer,
        web3Reducer
    }
)

export default allReducers