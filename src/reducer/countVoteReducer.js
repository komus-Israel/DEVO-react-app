const countVoteReducer=(state=0, action)=>{
    switch(action.type){
        case "COUNT":
            return state + action.payload
        default:
            return state
    }
        

}

export default countVoteReducer