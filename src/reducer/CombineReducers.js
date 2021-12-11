import { combineReducers } from "redux";
import connectWalletReducer from "./connectWalletReducer";
import hasWalletReducer from "./hasWalletReducer";
import addressReducer from "./addressReducer";

const allReducers = combineReducers(
    {
        connectWalletReducer,
        hasWalletReducer,
        addressReducer
    }
)

export default allReducers