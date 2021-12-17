import '../styling/homepage.css';
import Nav from "../components/Header";
import WelcomeMsg from "../components/WelcomeMsg";
import RegistrationForm from "../components/RegistrationForm";
import Candidate from '../components/Candidate';
import Instructions from '../components/Instructions';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';



const DevoHomePage=()=>{

    

    const candidates = [

        {name:"Komolehin Israel", img: "./images/komus.jfif", voteCount:1000},
        {name:"komus Eddison", img: "./images/komus.jfif", voteCount:1},

    ]

    const allCandidates = useSelector(
        state => state.candidateReducer
      )

    useEffect(()=>{
        
          console.log(typeof(allCandidates))
    })
  
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