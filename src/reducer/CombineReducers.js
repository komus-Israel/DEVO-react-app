import { combineReducers } from "redux";
import connectWalletReducer from "./connectWalletReducer";
import hasWalletReducer from "./hasWalletReducer";

const allReducers = combineReducers(
    {
        connectWalletReducer,
        hasWalletReducer
    }
)

export default allReducers