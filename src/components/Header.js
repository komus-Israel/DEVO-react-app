import '../styling/nav.css';



const Nav =()=>{
    return (
        <nav className='navbar'>
            <h1>DEVO</h1>
            <div className='header-options'>
                    <a href="#can">Vote</a>
                    <a href="#reg">Register</a>
                    <a href="/">Stat</a>
            </div>
        </nav>
    )
}

export default Nav