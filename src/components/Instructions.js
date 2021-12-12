import SVG from "./SVG";

const Instructions=()=>{

    const instructions = [

        {instruction: "Install MetaMask Wallet"},
        {instruction: "Connect Wallet"},
        {instruction: "Get Registered"},
        {instruction: "Vote your desired candidate"},
    ]

    return(
        <div className="instruction-cont">
            <div>
                <h2>
                    Trustless secured voting system
                </h2>
            </div>

            <div className='cont-withsvg'>
                <div className="main-instruction">
                    <ul>

                        {
                            instructions.map((instruction, index)=>(
                                <li key={index} >
                                    <img className="mark-icon" src="./images/mark.png" alt="loading"/>
                                    <p>{instruction.instruction}</p>
                                </li>
                            ))
                        }
                        
                    </ul>
                </div>

                <div className='svg'>
                    <SVG />
                </div>

                {
                    /*#af4261, #48a1dd*/
                }

               
            </div>

            

           

        </div>
    )
}

export default Instructions