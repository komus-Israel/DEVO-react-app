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

export const registering=()=>{
    return({
        type:"REGISTERING",
    })
}

export const notRegistering=()=>{
    return({
        type:"NOT-REGISTERING",
    })
}


export const RegResponse=(response)=>{
    return({
        type:"REGISTERATION-ATTEMPTED",
        payload:response
    })
}

export const setVoteStatus=(status)=>{
    return({
        type:"VOTED",
        payload:status
    })
}

export const startVoting=(status)=>{
    return({
        type:"START-VOTING",
        payload:status
    })
}

export const endVoting=(status)=>{
    return({
        type:"END-VOTING",
        payload:status
    })
}

export const getNoOfElectorates=(count)=>{
    return({
        type:"REGISTERED-ELECTORATES",
        payload:count
    })
}

export const countVote=(count)=>{
    return({
        type:"COUNT",
        payload:count
    })
}

export const setContract=()=>{
    return({
        type:"CONTRACT-AVAILABLE",
        
    })
}

export const approveElectorate=()=>{
    return({
        type:"APPROVED"
    })
}