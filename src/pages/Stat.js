import '../styling/stat.css';
import StatData from '../components/StatData';
import { useSelector } from 'react-redux';

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

                    <StatData data={{name: "candidates", count: noOfCandidates.length}} />
                </div>

            
               

            </div>
        </div>
    )
}

export default Stat