import '../styling/stat.css';
import StatData from '../components/StatData';

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
                </div>

            
               

            </div>
        </div>
    )
}

export default Stat