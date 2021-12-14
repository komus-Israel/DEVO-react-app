export const connectWallet=(connection)=>{
    return({
        type:"CONNECTED",
        payload: connection.state
    })
}

export const disconnectWallet=(connection)=>{
    return({
        type:"DICONNECTED",
        payload: connection.state
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

export const candidates=(data)=>{
    return({
        type:"REGISTERED-CANDIDATES",
        payload:data
    })
}