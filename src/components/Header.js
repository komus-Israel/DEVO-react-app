import '../styling/nav.css';
import { Link } from 'react-router-dom';




const Nav =({voteRef, registerRef})=>{


    

   const scrollTo =(ref)=>{
        ref.current.scrollIntoView(
            {
                behavior: 'smooth',
                block: 'end',
                inline: 'nearest',
            }
        )
    }
    return (
        <nav className='navbar'>
            <h1>DEVO</h1>
            <div className='header-options'>
                    <a onClick={()=>scrollTo(voteRef)}>Vote</a>
                    <a onClick={()=>scrollTo(registerRef)}>Register</a>
                    <Link to="/stat">Stat</Link>
                   
            </div>
        </nav>
    )
}

export default Nav