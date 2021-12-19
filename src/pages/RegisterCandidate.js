import { useSelector } from "react-redux";
import CandidateRegistration from "../components/candidateRegistration";
import '../styling/register.css';
import Modal from "../components/Modal";





const RegisterCandidate=()=>{

    const registering = useSelector(
        state=>state.registeringReducer
    )


    const regResponse = useSelector(
        state => state.RegReducer
    )


    return (
        <div className="homepage-container">

            {
                registering && <div className="modal">
                    <img src="images/cube.gif" alt="registering"/>
                </div>
            }

            {
                regResponse.length > 0 && <Modal response = {regResponse}/>
                
            }
            <div className="sub-register-cont">
                <h2 className="register-header">Register candidate</h2>
                <CandidateRegistration />
            </div>

           
            
            
        </div>
    )
}



export default RegisterCandidate