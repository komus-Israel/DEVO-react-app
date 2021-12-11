import '../styling/homepage.css';
import Nav from "./Header";
import WelcomeMsg from "./WelcomeMsg";
import RegistrationForm from "./RegistrationForm";
import Candidate from './Candidate';
import Instructions from './Instructions';
import { checkEthereum, checkWalletConnection, connectEthereumWallet } from '../functions/functions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { installedWallet } from '../actions';



const DevoHomePage=()=>{

    const dispatch = useDispatch()

    const isConnected = useSelector(
        state => state.connectWalletReducer
    )

    const isInstalled = useSelector(
        state => state.hasWalletReducer
    )

    


    const candidates = [

        {name:"komus", img: "./images/komus.jfif", party:"zion"},
        {name:"komus", img: "./images/komus.jfif", party:"zion"},

    ]

    useEffect(()=>{

        const handleWalletConnection= async ()=>{
                const checkEth = checkEthereum()
                checkEth && dispatch(installedWallet())
                console.log(isInstalled)
        }

        handleWalletConnection()
        
    })
  
    return(
        <div className="homepage-container">
            <Nav />
            <WelcomeMsg />

            <div className="page-content">
                <h2 className="get-started">Let's Get You Started</h2>

                <RegistrationForm />
                <Instructions />


                <div className="candidates">
                    <h2 className="canditates-header">Candidates</h2>

                    <div className="candidate-list">
                        {
                            candidates.map((candidate, index)=>{
                                return(
                                        <Candidate candidate={candidate} key={index}/>
                                )
                            })
                        }
                    </div>
                    
                   
                </div>
                
            </div>
        </div>     
    )
}

export default DevoHomePage