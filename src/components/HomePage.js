import react from "react";
import '../styling/homepage.css';
import Nav from "./Header";



const DevoHomePage=()=>{

  
    return(
        <div className="homepage-container">
            <Nav />
            <div className='overlay'></div>   
        </div>     
    )
}

export default DevoHomePage