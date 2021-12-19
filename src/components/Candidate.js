import { useSelector, useDispatch } from "react-redux"
import { vote, getVoteCount } from "../functions/functions"
import { useEffect, useState } from 'react'



const Candidate= ({candidate})=>{

   

    const electorateAddress = useSelector(
        state => state.addressReducer
    )

    const voteStatus = useSelector(
        state => state.voteReducer
    )

    const dispatch = useDispatch()


    const [voteCount, setVoteCount] = useState('')

    const imgStyle = {
        zIndex: voteStatus && -100000000000,
    }

    const contStyle = {
       background: voteStatus ? "linear-gradient(180deg,   rgba(175, 66, 97, .8), rgba(72, 161, 221, .8))" : "linear-gradient(180deg,   rgba(175, 66, 97), rgba(72, 161, 221))"
    }



    

    useEffect(()=>{

        const getCountFromPromise = async() => {
            const count = await getVoteCount(candidate.candidateAddress) 
            setVoteCount(count)       
        }
       
        getCountFromPromise()

    })
    return(

        candidate.ipfsHash.length > 0 && (
                <div className="candidate-profile" style= { contStyle} onClick=
                {

                    ()=> (!voteStatus && electorateAddress.length > 0) ? vote(dispatch, electorateAddress[0],candidate.candidateAddress) :

                            (!voteStatus && electorateAddress.length ===0  ) ? alert("can't detect any connected address") :

                            (voteStatus && electorateAddress.length > 0)  && alert("you can't vote more than once")
                   
                }
                >
                            <img src={`https://gateway.pinata.cloud/ipfs/${candidate.ipfsHash}`} alt = "incoming" className="candidate-image" style={imgStyle}/>
                            <p className="candidate-name">{candidate.name}</p>
                            <h2 className='vote-count'>{candidate.voteCount}</h2>
                            <p>{voteCount}</p>
                            
                            
                 </div>
        )
        
    )
}

export default Candidate

