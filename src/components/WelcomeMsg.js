import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
//import { connectEthereumWallet, disconnectEthereumWallet } from "../functions/functions"
import { checkEthereum } from "../functions/functions"
import { useDispatch } from "react-redux";
import { address } from "../actions";





const WelcomeMsg=()=>{

    const dispatch = useDispatch()



    const [name, setName] = useState('bisola')

    const isInstalled = useSelector(
        state => state.hasWalletReducer
    )

    const connectedAddress = useSelector(
        state => state.addressReducer
    )

    const connectEthereumWallet= async ()=>{
        const ethereum = checkEthereum()
    
        if (ethereum) {
            const connectAccount = await ethereum.request({method: 'eth_requestAccounts'})
            dispatch(address(connectAccount))
            return connectAccount
        }
    }

    const disconnectEthereumWallet= async ()=>{
        const ethereum = checkEthereum()
        /*if (ethereum) {
            ethereum.request.disconnect()
        }*/
        console.log("disconnected")
    
    }

    return(
        <div className='welcome-msg'>

            <h2>A decentralized voting system to vote in your desired candidate for 2023 presidential election</h2>

            {
                isInstalled && connectedAddress.length === 0 ? <button className="connect-wallet" onClick={connectEthereumWallet}>Connect Wallet</button> :

                !isInstalled ? <button className="connect-wallet">Install MetaMask</button> :

                (connectedAddress.length > 0) && <button className="connect-wallet" onClick={disconnectEthereumWallet}>disconnect wallet</button>

                
            }

            {
                name === 'bisola' ? <p style={{color:'white'}} onClick={()=>setName('tunde')}>bisola</p> :

                <p style={{color:'white'}} onClick={()=>setName('bisola')}>tunder</p>
            }

            
        </div>
    )
}

export default WelcomeMsg