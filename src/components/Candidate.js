import { candidates } from "../actions"
import { useSelector, useDispatch } from "react-redux"
import { vote, getVoteCount } from "../functions/functions"
import { useEffect, useState } from 'react'



const Candidate= ({candidate})=>{

   

    const electorateAddress = useSelector(
        state => state.addressReducer
    )

    const dispatch = useDispatch()


    const [voteCount, setVoteCount] = useState('')

    useEffect(()=>{

        const getCountFromPromise = async() => {
            const count = await getVoteCount() 
            setVoteCount(count)       
        }
       
        getCountFromPromise()

    })
    return(

        candidate.ipfsHash.length > 0 && (
                <div className="candidate-profile" onClick={()=>vote(dispatch, electorateAddress[0],candidate.candidateAddress)}>
                            <img src={`https://gateway.pinata.cloud/ipfs/${candidate.ipfsHash}`} alt = "incoming" className="candidate-image"/>
                            <p className="candidate-name">{candidate.name}</p>
                            <h2 className='vote-count'>{candidate.voteCount}</h2>
                            <p>{voteCount}</p>
                            
                            
                 </div>
        )
        
    )
}

export default Candidate