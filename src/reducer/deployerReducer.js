const deployerReducer=(state='', action)=>{

    switch(action.type){
        case "DEPLOYER":
            return action.payload
        default:
            return state
    }
}


export default deployerReducer