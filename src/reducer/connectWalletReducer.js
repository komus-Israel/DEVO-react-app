const connectWalletReducer=(state = "disconnected", action)=>{

    switch(action.type){
        case "CONNECT":
            return "connected"
        case "DISCONNECT":
            return "disconnected"
        default:
            return "disconnected"
    }
}


export default connectWalletReducer