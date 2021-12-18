const allElectoratesReducer=(state=0, action)=>{
    switch(action.type){
        case "REGISTERED-ELECTORATES":
            return action.payload
        default:
            return state
    }
        

}

export default allElectoratesReducer