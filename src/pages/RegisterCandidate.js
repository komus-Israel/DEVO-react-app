import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CandidateRegistration from "../components/candidateRegistration";
import '../styling/register.css';
import { candidateRegResponse } from "../actions";





const RegisterCandidate=()=>{

    const registering = useSelector(
        state=>state.registeringReducer
    )

    const isInstalled = useSelector(
        state => state.hasWalletReducer
    )

    const regResponse = useSelector(
        state => state.candidateRegReducer
    )

    const dispatch = useDispatch()

    useEffect(()=>{
        
        console.log(isInstalled)

        

    })

    return (
        <div className="homepage-container">

            {
                registering && <div className="modal">
                    <img src="images/cube.gif" alt="registering"/>
                </div>
            }

            {
                regResponse.length > 0 && <div className="modal" onClick={()=>dispatch(candidateRegResponse(""))}>
                                            <h3>{regResponse}</h3>
                                        </div>
            }
            <div className="sub-register-cont">
                <h2 className="register-header">Register candidate</h2>
                <CandidateRegistration />
            </div>

           
            
            
        </div>
    )
}



export default RegisterCandidate