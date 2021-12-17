import '../styling/homepage.css';
import Nav from "../components/Header";
import WelcomeMsg from "../components/WelcomeMsg";
import RegistrationForm from "../components/RegistrationForm";
import Candidate from '../components/Candidate';
import Instructions from '../components/Instructions';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';



const DevoHomePage=()=>{

    

    const [voting, setVoting] = useState(true)

    const allCandidates = useSelector(
        state => state.candidateReducer
      )
  
    return(
        <div className="homepage-container">

            {
                voting && (
                            <div className="modal" id="voting-modal">
                                <img src="images/cube.gif" alt="registering"/>
                            </div>
                )
            }
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
                            allCandidates.map((candidate, index)=>{
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