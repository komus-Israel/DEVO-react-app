const votingReducer=(state=false, action)=>{
    switch(action.type){
        case "START-VOTING":
            return action.payload
        case "END-VOTING":
            return action.payload
        default:
            return state
    }
        

}

export default votingReducer