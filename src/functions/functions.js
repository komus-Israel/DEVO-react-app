import Web3 from "web3";
import Vote from '../abi/Vote.json';
import { address, deployer, registering, notRegistering, RegResponse, ipfsResponse } from "../actions";
import axios from "axios";
import FormData from "form-data";





export const checkWalletConnection=async (web3)=>{
    
    const ethereum = checkEthereum()
    let accounts

    if (ethereum) {
     
        //  check if there are any connected accounts
        //accounts = await ethereum.request({method: 'eth_accounts'});
        accounts = await web3.eth.getAccounts()
        
        if (accounts.length > 0) {
            localStorage.setItem('user', accounts[0])
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

export const loadBlockchainData=async (dispatch)=>{
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")

    //dispatch(web3Connection(web3))


    const networkType = await web3.eth.net.getNetworkType()
    const accounts = await web3.eth.getAccounts()
    const networkID = await web3.eth.net.getId()

    // get the abi
    const abi = Vote.abi

    // get the networks the contract is connected to
    const networks = Vote.networks

    //  get the contract address on the network
    //console.log(networks[networkID].address)
   // const contractAddress = networks[networkID].address

    // instantiate the contract
    //const contract = new web3.eth.Contract(abi, contractAddress)
    

    //const owner = await contract.methods.candidates("0x292072a24aa02b6b0248C9191d46175E11C86270").call()
    //console.log(owner)
  
}


export const loadWeb3=()=>{
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    return web3

}


export const loadContract= async(web3)=>{

        //  get the abi and the contract address

        //  get the network ID
        const networkID = await web3.eth.net.getId()
        

        //  get the network
        const networks = Vote.networks

        // get the abi
        const abi = Vote.abi

        //  use the network ID to get the contract address
        const contractAddress = networks[networkID].address


        const contract = new web3.eth.Contract(abi, contractAddress)

        return contract
    
}


export const loadDeployerAddress=async (dispatch, loadContract)=>{
    
    const contract = await loadContract
    const deployerAddress = await contract.methods.owner().call()
    localStorage.setItem('deployer', deployerAddress)
    
    dispatch(deployer(deployerAddress))
    
}




export const uploadToPinata=async(file, dispatch, name, address, deployer, setCandidateAddress, setCandidateName, setImages)=>{

    dispatch(registering())

    const isWeb3 = loadWeb3()
    const contract = await loadContract(isWeb3)

    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`
    let data = new FormData()

     const API_KEY = process.env.REACT_APP_API_KEY
     const API_SECRET = process.env.REACT_APP_API_SECRET
    

    data.append("file", file)


    try{
        const res = await axios.post(
            url,
            data,
            {
                maxContentLength: "Infinity",
                headers: {
                    "Content-Type": `multipart/form-data;boundary=${data._boundary}`, 
                    'pinata_api_key': API_KEY,
                    'pinata_secret_api_key': API_SECRET
    
                }
            }
        )

        const hash = res.data.IpfsHash

        try {
            contract.methods.registerCandidates(address, name, hash).send({from: deployer}).then(
                res=>{
                    if(res.events.CandidateRegistered){
                        dispatch(notRegistering())
                        dispatch(RegResponse('Candidate registration has been approved'))
                        setCandidateAddress('')
                        setCandidateName('')
                        setImages([])
                    }
                }
            )
        } catch(err) {
            console.log(err)
            dispatch(RegResponse('error while registering candidate'))
        }

    } catch(err) {
        dispatch(RegResponse('network error'))
        dispatch(notRegistering())
    }

    

    

    

    

}


export const handleElectorateReg=async (e,firstName, middleName, lastName, nin, state, address, dispatch)=>{
    
    e.preventDefault()
    dispatch(registering())
    const isWeb3 = loadWeb3()
    const contract = await loadContract(isWeb3)


    try {
        contract.methods.registerVoter(firstName, lastName, middleName, state, nin).send({from: address}).then(
            
            res=>{
                if(res.events.Registered)
                dispatch(notRegistering())
                dispatch(RegResponse('Your registration has been approved'))
            }
            
        )
    } catch(err) {

        dispatch(RegResponse('error while registering electorate'))
        dispatch(notRegistering())
    }

    
}



