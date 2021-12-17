const voteReducer=(state=false, action)=>{
    switch(action.type){
        case "VOTED":
            return action.payload
        default:
            return state
    }
        

}

export default voteReducer