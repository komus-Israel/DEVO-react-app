const hasWalletReducer=(state=false, action)=>{

    switch(action.type) {
        case "INSTALLED":
            return true
        default:
            return false
    }

}

export default hasWalletReducer