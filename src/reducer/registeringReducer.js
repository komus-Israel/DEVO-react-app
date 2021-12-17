const registeringReducer=(state=false, action)=>{

    switch(action.type){
        case "REGISTERING":
            return true
        case "NOT-REGISTERING":
            return false
        default:
            return state
    }
}


export default registeringReducer