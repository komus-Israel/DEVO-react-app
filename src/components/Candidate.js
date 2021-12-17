import { candidates } from "../actions"

const Candidate=({candidate})=>{
    return(

        candidate.ipfsHash.length > 0 && (
                <div className="candidate-profile">
                            <img src={`https://gateway.pinata.cloud/ipfs/${candidate.ipfsHash}`} alt = "incoming" className="candidate-image"/>
                            <p className="candidate-name">{candidate.name}</p>
                            <h2 className='vote-count'>{candidate.voteCount}</h2>
                 </div>
        )
        
    )
}

export default Candidate