export const connectWallet=()=>{
    return({
        type:"CONNECT"
    })
}

export const disconnectWallet=()=>{
    return({
        type:"DICONNECT"
    })
}

export const installedWallet=()=>{
    return({
        type:"INSTALLED"
    })
}

export const address=(data)=>{
    return({
        type:"CONNECTED",
        payload:data
    })
}