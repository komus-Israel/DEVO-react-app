const aRegisteredElectorateReducer=(state=false, action)=>{

    switch(action.type){
        case "APPROVED":
            return true
        default:
            return state
    }
}


export default aRegisteredElectorateReducer