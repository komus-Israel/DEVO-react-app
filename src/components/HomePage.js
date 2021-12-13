import '../styling/homepage.css';
import Nav from "./Header";
import WelcomeMsg from "./WelcomeMsg";
import RegistrationForm from "./RegistrationForm";
import Candidate from './Candidate';
import Instructions from './Instructions';
import { checkEthereum, checkWalletConnection, loadBlockchainData } from '../functions/functions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { installedWallet, address } from '../actions';




const DevoHomePage=()=>{

    const dispatch = useDispatch()



    const candidates = [

        {name:"komus", img: "./images/komus.jfif", party:"zion"},
        {name:"komus", img: "./images/komus.jfif", party:"zion"},

    ]

    useEffect(()=>{

        const handleWalletInstallation= async ()=>{
                const checkEth = checkEthereum()
                checkEth && dispatch(installedWallet())
                
                if (checkEth) {

                    //  check connected adddresses

                    const checkConnection = await checkWalletConnection()
                
                    checkConnection && dispatch(address(checkConnection.data))

                }
        }

        handleWalletInstallation()

        loadBlockchainData()
       
        
    }, [dispatch])
  
    return(
        <div className="homepage-container">
            <Nav />
            <WelcomeMsg />

            <div className="page-content">

                <h2 className="get-started">Let's Get You Started</h2>

                <RegistrationForm />

                <Instructions />

                <div className="candidates" id="can">
                    
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