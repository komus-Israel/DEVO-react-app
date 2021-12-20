import '../styling/registrationform.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleElectorateReg } from '../functions/functions';
import Modal from './Modal';

const RegistrationForm=({registerRef})=>{

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [nin, setNIN] = useState('')
    const [state, setState] = useState('')

    const address = useSelector(
        state => state.addressReducer
    )

    const registering = useSelector(
        state=>state.registeringReducer
    )

    const regResponse = useSelector(
        state => state.RegReducer
    )

    const registered = useSelector(
        state => state.aRegisteredElectorateReducer
    )

    const dispatch = useDispatch()

    return (
        <form className="registration-form" id="reg" ref={registerRef}>

            {
                registering && <div className="modal">
                    <img src="images/cube.gif" alt="registering"/>
                </div>
            }

            {
                regResponse.length > 0 && <Modal response = {regResponse}/>
                
            }
            <div className = "input-cont">
                <input placeholder='First name' value={firstName} onChange={(event)=>setFirstName(event.target.value)}/>
                <input placeholder='Last name' value={lastName} onChange={(event)=>setLastName(event.target.value)}/>
                <input placeholder='Middle name' value = {middleName} onChange={(event)=>setMiddleName(event.target.value)}/>
            </div>

            <div className = "input-cont" id="last-input">
                <input placeholder='NIN' value={nin} onChange={(event)=>setNIN(event.target.value)}/>
                <input placeholder='State' value={state} onChange={(event)=>setState(event.target.value)}/>
            </div>

            {
                (!registered && address.length > 0 && firstName.length > 0  && lastName.length > 0 && middleName.length > 0 && nin.length > 0 && state.length > 0)
                
                ? 
                
                <button onClick={(e)=>handleElectorateReg(e,firstName, middleName, lastName, nin, state, address[0], dispatch, setFirstName, setLastName, setMiddleName, setNIN, setState)} className="register">register</button>
                
                : 

                registered ? <button onClick = {(e)=>{
                    e.preventDefault()
                    alert("your address cant be registered twice")
                }} className="register">register</button> :
                
                
                <button onClick={(e)=>{
                    e.preventDefault()
                    alert('ensure you connect your address and fill the form completely')}
                } className="register" >register</button>
            }
            
            
        </form>
    )
}

export default RegistrationForm