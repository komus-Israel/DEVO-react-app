import Web3 from "web3";




export const checkWalletConnection=async ()=>{
    
    const ethereum = checkEthereum()
    let accounts

    if (ethereum) {
     
        //  check if there are any connected accounts
        accounts = await ethereum.request({method: 'eth_accounts'});
        
        if (accounts.length > 0) {
            return {
                state: true,
                data: accounts
            }
        } else {
            return {
                state:false,
                data:[]
            }
        }
    }

    else {
        return {
            state:false,
            data:[]
        }
    }


    
    
}

export const checkEthereum=()=>{

    try {
        const { ethereum } =  window 
        if (ethereum.isMetaMask){
           
            return ethereum
        } else {
            return false
        }

    } catch(err) {
        return false
    }
    
}

export const connectEthereumWallet= async ()=>{
    const ethereum = checkEthereum()

    if (ethereum) {
        const connectAccount = await ethereum.request({method: 'eth_requestAccounts'})
        
        return connectAccount
    }
}

export const disconnectEthereumWallet= async ()=>{
    const ethereum = checkEthereum()
    /*if (ethereum) {
        ethereum.request.disconnect()
    }*/
    console.log("disconnected")
    console.log(ethereum)

}

export const loadBlockchainData=async()=>{
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const network = await web3.eth.net.getNetworkType()
    console.log(network)
    console.log('dsbdfb')
    
    
}