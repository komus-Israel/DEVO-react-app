import Web3 from "web3";
import Vote from '../abi/Vote.json';
import { address } from "../actions";




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

export const connectEthereumWallet= async (dispatch)=>{
    const ethereum = checkEthereum()

    if (ethereum) {
        const connectAccount = await ethereum.request({method: 'eth_requestAccounts'})
        dispatch(address(connectAccount))
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

export const loadBlockchainData=async ()=>{
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const networkType = await web3.eth.net.getNetworkType()
    const accounts = await web3.eth.getAccounts()
    const networkID = await web3.eth.net.getId()

    // get the abi
    const abi = Vote.abi

    // get the networks the contract is connected to
    const networks = Vote.networks

    //  get the contract address on the network
    console.log(networks[networkID].address)
    const contractAddress = networks[networkID].address

    // instantiate the contract
    const contract = new web3.eth.Contract(abi, contractAddress)
    console.log(contract)

    //const owner = await contract.methods.candidates("0x292072a24aa02b6b0248C9191d46175E11C86270").call()
    //console.log(owner)

    console.log(abi)
    
    
}