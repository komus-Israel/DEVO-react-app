import '../styling/homepage.css';
import Nav from "../components/Header";
import WelcomeMsg from "../components/WelcomeMsg";
import RegistrationForm from "../components/RegistrationForm";
import Candidate from '../components/Candidate';
import Instructions from '../components/Instructions';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVoteStatus } from '../functions/functions';
import { useRef } from 'react';




const DevoHomePage=()=>{

    const voteRef = useRef(null)
    const registerRef = useRef(null)

    const voting = useSelector(
        state => state.votingReducer
    )

    const dispatch = useDispatch()

    const allCandidates = useSelector(
        state => state.candidateReducer
      )

      

      useEffect(()=>{
        getVoteStatus(dispatch)
      })

    
  
    return(
        <div className="homepage-container">

            {
                voting && (
                            <div className="modal" id="voting-modal">
                                <img src="images/cube.gif" alt="registering"/>
                            </div>
                )
            }
            <Nav voteRef={voteRef} registerRef={registerRef} candidates={allCandidates}/>
            <WelcomeMsg />
           

            <div className="page-content" >

                <h2 className="get-started" >Let's Get You Started</h2>

                <RegistrationForm registerRef={registerRef}/>

                <Instructions />

               
                {
                    allCandidates.length > 0 && (
                                        <section className="candidates" ref={voteRef}>
                    
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
                    
                   
                                         </section>
                    )
                }
              

                
              
                
                
            </div>
        </div>     
    )
}


export default DevoHomePage