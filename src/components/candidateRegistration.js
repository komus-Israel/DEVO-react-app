import { useState } from "react"
import { handleImageSelection } from "../functions/functions"



const CandidateRegistration=()=>{

    const [image, setImage] = useState()
    return(

        <div className='candidate-registration-form'>
            <div className='candidate-registration-formdiv'>

                <div className="inputs">
                    <input placeholder='candidate address' className='candidate-address'/>
                    <input placeholder='candidate name' className='candidate-name'/>
                    <div>
                        <button className="register-candidate-btn" onClick={()=>handleImageSelection(image)}>register</button>
                    </div>
                </div>

                <div className="image-upload">
                    <label htmlFor="file"><div className="frame"><p>Candidate Image</p></div></label>   
                    <input type="file" className="candidate-img-upload" name="file" id="file" onChange={(e)=>setImage(e.target.files[0])}/>
                </div>
                
                
            </div>

            
        </div>
        
    )
}

export default CandidateRegistration