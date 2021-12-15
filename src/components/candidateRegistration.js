const CandidateRegistration=()=>{
    return(

        <div className='candidate-registration-form'>
            <div className='candidate-registration-formdiv'>

                <div className="inputs">
                    <input placeholder='candidate address' className='candidate-address'/>
                    <input placeholder='candidate name' className='candidate-name'/>
                    <div>
                        <button className="register-candidate-btn">register</button>
                    </div>
                </div>

                <div className="image-upload">
                    <label for="file"><div className="frame"><p>Candidate Image</p></div></label>   
                    <input type="file" className="candidate-img-upload" name="file" id="file"/>
                </div>
                
                
            </div>

            
        </div>
        
    )
}

export default CandidateRegistration