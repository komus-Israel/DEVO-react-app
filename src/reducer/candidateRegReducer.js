const candidateRegReducer=(state='', action)=>{

    switch(action.type){
        case "REGISTERATION-ATTEMPTED":
            return action.payload
        default:
            return state
    }
}


export default candidateRegReducer