import Web3 from "web3";
import Vote from '../abi/Vote.json';
import { address, deployer, registering, notRegistering, RegResponse, candidates, setVoteStatus, startVoting, endVoting, getNoOfElectorates, countVote, approveElectorate } from "../actions";
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
        const web3 = loadWeb3()
        const connectAccount = await ethereum.request({method: 'eth_requestAccounts'})
        const accountFromWeb3 = await web3.eth.getAccounts()
        dispatch(address(accountFromWeb3))
        return connectAccount
    }
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

        try {
            //return contract
            const contractAddress = networks[networkID].address
    
            const contract = new web3.eth.Contract(abi, contractAddress)

            return contract
        } catch (err) {
            return false
        }
        
        

        
        
    
}


export const loadDeployerAddress=async (dispatch, loadContract)=>{
    
    const contract = await loadContract
    const deployerAddress = await contract.methods.owner().call()
    localStorage.setItem('deployer', deployerAddress)
    
    dispatch(deployer(deployerAddress))
    return true
    
}

export const loadRegisteredCandidates=async(dispatch)=>{
    const isWeb3 = loadWeb3()
    const contract = await loadContract(isWeb3)
    const registeredCandidates = await contract.methods.getAllCandidates().call()
    dispatch(candidates(registeredCandidates))
    return registeredCandidates
}

export const vote=async(dispatch, electorateAddress, candidateAddress)=>{
    dispatch(startVoting(true))
    const isWeb3 = loadWeb3()
    const contract = await loadContract(isWeb3)
    const vote = await contract.methods.voteCandidate(candidateAddress).send({from: electorateAddress})
    if(vote.events.VoteCandidate) {
        dispatch(setVoteStatus(true))
    }
    dispatch(endVoting(false))
}

export const fetchNoOfElectorates=async(dispatch)=>{
    const isWeb3 = loadWeb3()
    const contract = await loadContract(isWeb3)
    const noOfElectorates = await contract.methods.noOfRegisteredVoters().call()
    dispatch(getNoOfElectorates(noOfElectorates))
    
   
}

export const checkIfAddressIsRegistered=async(address)=>{
    const isWeb3 = loadWeb3()
    const contract = await loadContract(isWeb3)
    const accountFromWeb3 = await isWeb3.eth.getAccounts()

    if (accountFromWeb3.length > 0) {
        const isRegistered = await contract.methods.registered(accountFromWeb3[0]).call()
        return isRegistered
    }
    
}

export const getVoteStatus=async(dispatch)=>{

    let accounts

    const isWeb3 = loadWeb3()
    const contract = await loadContract(isWeb3)

    try{
        accounts = await isWeb3.eth.getAccounts()
        const checkVoteStatus = await contract.methods.validateVote(accounts[0]).call()
        checkVoteStatus && dispatch(setVoteStatus(checkVoteStatus))
        return checkVoteStatus
    }catch (err) {
        return 'error'
    }
    
    
}

export const getVoteCount=async(electorateAddress)=>{
    const isWeb3 = loadWeb3()
    const contract = await loadContract(isWeb3)

    const candidateVoteCount = await contract.methods.voteCount(electorateAddress).call()
    return candidateVoteCount
}


export const getTotalVote=async(dispatch)=>{

    const registeredCandidates = await loadRegisteredCandidates(dispatch)
    
    let eachVoteCount = []


    await Promise.all(
        registeredCandidates.map(
            async (candidate)=>{
                const count = await getVoteCount(candidate.candidateAddress)
                eachVoteCount.push(count)
            }
        )
    )


    eachVoteCount.length > 0 && dispatch(countVote(eachVoteCount.reduce(sum)))
    
    
   
    
}

export const sum=(num1, num2)=>{
    return Number(num1) + Number(num2)
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
            dispatch(RegResponse('error while registering candidate'))
        }

    } catch(err) {
        dispatch(RegResponse('network error'))
        dispatch(notRegistering())
    }

 

}


export const handleElectorateReg=async (e,firstName, middleName, lastName, nin, state, address, dispatch, setFirstName, setLastName, setMiddleName, setNIN, setState)=>{
    
    e.preventDefault()
    dispatch(registering())
    const isWeb3 = loadWeb3()
    const contract = await loadContract(isWeb3)


    try {
        contract.methods.registerVoter(firstName, lastName, middleName, state, nin).send({from: address}).then(
            
            res=>{
                if(res.events.ElectorateRegistered)
                    dispatch(notRegistering())
                    setFirstName('')
                    setLastName('')
                    setMiddleName('')
                    setNIN('')
                    setState('')
                    dispatch(approveElectorate())
                    dispatch(RegResponse('Your registration has been approved'))
            }
            
        )
    } catch(err) {

        dispatch(RegResponse('error while registering electorate'))
        dispatch(notRegistering())
    }

    
}







