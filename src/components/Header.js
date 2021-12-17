import '../styling/nav.css';
import { Link } from 'react-router-dom';



const Nav =()=>{
    return (
        <nav className='navbar'>
            <h1>DEVO</h1>
            <div className='header-options'>
                    <a href="#can">Vote</a>
                    <a href="#reg">Register</a>
                    <Link to="/stat">Stat</Link>
            </div>
        </nav>
    )
}

export default Nav