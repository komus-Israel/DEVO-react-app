import '../styling/nav.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';




const Nav =({voteRef, registerRef, candidates})=>{


    const isContract = useSelector(
        state => state.contractReducer
    )

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

            {
                isContract && (
                    <div className='header-options'>
                        {
                            candidates.length > 0 && <a onClick={()=>scrollTo(voteRef)}>Vote</a>
                        }
                        <a onClick={()=>scrollTo(registerRef)}>Register</a>
                        <Link to="/stat">Stat</Link>
                   
                    </div>
                )
            }
           
        </nav>
    )
}

export default Nav