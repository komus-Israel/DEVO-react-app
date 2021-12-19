import { combineReducers } from "redux";
//import connectWalletReducer from "./connectWalletReducer";
import hasWalletReducer from "./hasWalletReducer";
import addressReducer from "./addressReducer";
import candidateReducer from "./candidatesReducer";
import deployerReducer from "./deployerReducer";
import registeringReducer from "./registeringReducer";
import RegReducer from "./RegReducer";
import voteReducer from "./voteReducer";
import votingReducer from "./votingReducer";
import allElectoratesReducer from "./allElectoratesReducer";
import countVoteReducer from "./countVoteReducer";
import contractReducer from "./contractReducer";
import aRegisteredElectorateReducer from "./isRegElecReducer";

const allReducers = combineReducers(
    {
        //connectWalletReducer,
        hasWalletReducer,
        addressReducer,
        candidateReducer,
        deployerReducer, 
        registeringReducer,
        RegReducer,
        voteReducer,
        votingReducer,
        allElectoratesReducer,
        countVoteReducer,
        contractReducer,
        aRegisteredElectorateReducer
       
    }
)

export default allReducers