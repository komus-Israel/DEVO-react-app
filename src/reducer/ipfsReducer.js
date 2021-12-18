const ipfsReducer=(state="", action)=>{
    switch (action.type) {
        case "HASH-GOTTEN":
            return action.payload
        default:
            return state
    }
}

export default ipfsReducer