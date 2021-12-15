import { useEffect } from "react";
import { useSelector } from "react-redux";
import CandidateRegistration from "../components/candidateRegistration";
import '../styling/register.css';





const RegisterCandidate=(state)=>{

    const isInstalled = useSelector(
        state => state.hasWalletReducer
    )

    useEffect(()=>{
        
        console.log(isInstalled)

        

    })

    return (
        <div className="homepage-container">
            <div className="sub-register-cont">
                <h2 className="register-header">Register candidate</h2>
                <CandidateRegistration />
            </div>

           
            
            
        </div>
    )
}



export default RegisterCandidate