const web3Reducer=(state={}, action)=>{

    switch(action.type){
        case "WEB3":
            return action.payload
        default:
            return state
    }
}


export default web3Reducer