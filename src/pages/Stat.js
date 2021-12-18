import '../styling/stat.css';
import StatData from '../components/StatData';
import { useSelector, useDispatch } from 'react-redux';
import { getTotalVote, getVoteCount } from '../functions/functions';
import { useEffect } from 'react';




const Stat=()=>{

    

    const data = [

        {
            name: "Candidates",
            count: 2
         },

         {
            name: "Electorates",
            count: 1000
         },

         {
            name: "Submitted Votes",
            count: 1000
         },


    ]

    const noOfCandidates = useSelector(
        state => state.candidateReducer
    )

    const noOfElectorates = useSelector(
        state => state.allElectoratesReducer
    )

    const totalVoteCount = useSelector(
        state=>state.countVoteReducer
    )

    const dispatch = useDispatch()

    useEffect(()=>{

        
        const get=async()=>await getTotalVote(noOfCandidates)

        get()
        
    }, [])

    
    return(
        <div className="homepage-container">
            <div className="stat-cont">

                <h2 className="stat-header">  Stat </h2>

                <div className="stats">
                    {
                        data.map(data=>(
                            <StatData data={data} />
                        ))
                    }

                    <StatData data={{name: "candidates", count: noOfCandidates.length > 0 ? noOfCandidates.length : 0}} />
                    <StatData data = {{name:"electorates", count:noOfElectorates}}/>
                </div>
no
            
               

            </div>
        </div>
    )
}

export default Stat