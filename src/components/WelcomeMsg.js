import { useEffect } from "react"
import { useSelector } from "react-redux"
import { connectEthereumWallet, disconnectEthereumWallet } from "../functions/functions"





const WelcomeMsg=()=>{

    const isInstalled = useSelector(
        state => state.hasWalletReducer
    )

    const connectedAddress = useSelector(
        state => state.addressReducer
    )

    return(
        <div className='welcome-msg'>

            <h2>A decentralized voting system to vote in your desired candidate for 2023 presidential election</h2>

            {
                isInstalled && connectedAddress.length === 0 ? <button className="connect-wallet" onClick={connectEthereumWallet}>Connect Wallet</button> :

                !isInstalled ? <button className="connect-wallet">Install MetaMask</button> :

                (connectedAddress.length > 0) && <button className="connect-wallet" onClick={disconnectEthereumWallet}>disconnect wallet</button>

                
            }

            
        </div>
    )
}

export default WelcomeMsg