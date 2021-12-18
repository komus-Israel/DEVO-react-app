import { useSelector } from "react-redux"
import { connectEthereumWallet } from "../functions/functions"
import { useDispatch } from "react-redux";







const WelcomeMsg=()=>{

    const dispatch = useDispatch()


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
                isInstalled && connectedAddress.length === 0 ? <button className="connect-wallet" onClick={()=>connectEthereumWallet(dispatch)}>Connect Wallet</button> :

                !isInstalled ? <button className="connect-wallet">Install MetaMask</button> :

                (connectedAddress.length > 0) && <div className="connected-address" href="#reg"><p>{connectedAddress}</p></div>

                
            }


            
        </div>
    )
}

export default WelcomeMsg