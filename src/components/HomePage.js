import '../styling/homepage.css';
import Nav from "./Header";
import WelcomeMsg from "./WelcomeMsg";
import RegistrationForm from "./RegistrationForm";
import Candidate from './Candidate';



const DevoHomePage=()=>{

    try{
        const ethereum = { window }
        console.log(ethereum)
    } catch(err) {
        console.log(err)
    }


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
                    <h2 className="canditates-header">Candidates</h2>

                    <div className="candidate-list">
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
        </div>     
    )
}

export default DevoHomePage