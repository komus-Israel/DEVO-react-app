import '../styling/registrationform.css';

const RegistrationForm=()=>{
    return (
        <form className="registration-form">
            <div className = "input-cont">
                <input placeholder='First name'/>
                <input placeholder='Last name'/>
            </div>

            <div className = "input-cont">
                <input placeholder='Middle name'/>
                <input placeholder='State'/>
            </div>
            
            <input placeholder='NIN' id="last-input"/>
        </form>
    )
}

export default RegistrationForm