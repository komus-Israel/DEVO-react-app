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

export const web3Connection=(web3)=>{
    return({
        type:"WEB3",
        payload:web3
    })
}

export const deployer=(address)=>{
    return({
        type:"DEPLOYER",
        payload:address
    })
}