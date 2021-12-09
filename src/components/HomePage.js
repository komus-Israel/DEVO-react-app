import '../styling/homepage.css';
import Nav from "./Header";
import WelcomeMsg from "./WelcomeMsg";
import RegistrationForm from "./RegistrationForm";
import Candidate from './Candidate';



const DevoHomePage=()=>{


    const candidates = [

        {name:"komus", img: "./images/komus.jfif", party:"zion"},
        {name:"komus", img: "./images/komus.jfif", party:"zion"},
        {name:"komus", img: "./images/komus.jfif", party:"zion"},
        {name:"komus", img: "./images/komus.jfif", party:"zion"},
        {name:"komus", img: "./images/komus.jfif", party:"zion"},
        {name:"komus", img: "./images/komus.jfif", party:"zion"}
    ]

  
    return(
        <div className="homepage-container">
            <Nav />
            <WelcomeMsg />

            <div className="page-content">
                <h2 className="get-started">Let's Get You Started</h2>

                <RegistrationForm />


                <div className="candidates">
                    <h3>Candidates</h3>
                    {
                         candidates.map((candidate, index)=>{
                             return(
                                    <Candidate candidate={candidate} key={index}/>
                             )
                         })
                    }
                   
                </div>
                
            </div>
        </div>     
    )
}

export default DevoHomePage