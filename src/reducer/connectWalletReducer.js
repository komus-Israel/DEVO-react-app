const connectWalletReducer=(state=false, action)=>{

    switch(action.type){
        case "CONNECTED":
            return action.payload
        case "DISCONNECTED":
            return action.payload
        default:
            return state
    }
}


export default connectWalletReducer