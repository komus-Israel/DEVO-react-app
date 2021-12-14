const candidateReducer=(state=[], action)=>{
    switch(action.type){
        case "REGISTERED-CANDIDATES":
            return action.payload
        default:
            return state
    }
        

}

export default candidateReducer