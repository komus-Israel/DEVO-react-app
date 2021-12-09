import react from "react";
import '../styling/nav.css';



const Nav =()=>{
    return (
        <nav className='navbar'>
            <h1>DEVO</h1>
            <div className='header-options'>
                    <a>Vote</a> | <a>Register</a>
            </div>
        </nav>
    )
}

export default Nav