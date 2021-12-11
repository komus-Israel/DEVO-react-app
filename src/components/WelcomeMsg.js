import { useEffect } from "react"
import { useSelector } from "react-redux"
import hasWalletReducer from "../reducer/hasWalletReducer"




const WelcomeMsg=()=>{

    const isInstalled = useSelector(
        state => state.hasWalletReducer
    )

    return(
        <div className='welcome-msg'>

            <h2>A decentralized voting system to vote in your desired candidate for 2023 presidential election</h2>

            {
                isInstalled ? <button className="connect-wallet">Connect Wallet</button> :

                !isInstalled ? <button className="connect-wallet">Install MetaMask</button> :

                <button className="connect-wallet">Disconnect</button>
            }

            
        </div>
    )
}

export default WelcomeMsg