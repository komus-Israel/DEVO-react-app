import '../styling/registrationform.css';

const RegistrationForm=()=>{
    return (
        <form className="registration-form" id="reg">
            <div className = "input-cont">
                <input placeholder='First name'/>
                <input placeholder='Last name'/>
                <input placeholder='Middle name'/>
            </div>

            <div className = "input-cont" id="last-input">
                <input placeholder='NIN' />
                <input placeholder='State'/>
            </div>

            <button className="register">register</button>
            
            
        </form>
    )
}

export default RegistrationForm