const contractReducer=(state=false, action)=>{
    switch(action.type){
        case "CONTRACT-AVAILABLE":
            return true
        default:
            return state
    }
        

}

export default contractReducer