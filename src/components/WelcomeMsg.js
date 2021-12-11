import { useEffect } from "react"
import { useSelector } from "react-redux"





const WelcomeMsg=()=>{

    const isInstalled = useSelector(
        state => state.hasWalletReducer
    )

    const connectedAddress = useSelector(
        state => state.addressReducer
    )

    useEffect(()=>{
        console.log(connectedAddress)
    }, [])

    return(
        <div className='welcome-msg'>

            <h2>A decentralized voting system to vote in your desired candidate for 2023 presidential election</h2>

            {
                isInstalled && connectedAddress.length === 0 ? <button className="connect-wallet">Connect Wallet</button> :

                !isInstalled ? <button className="connect-wallet">Install MetaMask</button> :

                (connectedAddress.length > 0) && <button className="connect-wallet">Disconnect</button>

                
            }

            
        </div>
    )
}

export default WelcomeMsg