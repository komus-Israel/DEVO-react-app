import '../styling/stat.css';
import StatData from '../components/StatData';
import { useSelector, useDispatch } from 'react-redux';
import { getTotalVote } from '../functions/functions';
import { useEffect, useState } from 'react';





const Stat=()=>{

    const dispatch = useDispatch()

    const noOfCandidates = useSelector(
        state => state.candidateReducer
    )

    const noOfElectorates = useSelector(
        state => state.allElectoratesReducer
    )

    const [ totalVoteCount, setTotalVoteCount ] = useState('')


    const count = useSelector(
        state => state.countVoteReducer
    )

    

    useEffect(()=>{

       
        
        getTotalVote(dispatch)
            
       
    }, [])
   

    


    
    return(
        <div className="homepage-container">
            <div className="stat-cont">

                <h2 className="stat-header">  Stat </h2>

                <div className="stats">

                    <StatData data={{name: "candidates", count: noOfCandidates.length > 0 ? noOfCandidates.length : 0}} />
                    <StatData data = {{name:"electorates", count:noOfElectorates}}/>
                    <StatData data = {{name:"Submitted Votes", count:count}}/>
                </div>

            
               

            </div>
        </div>
    )
}

export default Stat