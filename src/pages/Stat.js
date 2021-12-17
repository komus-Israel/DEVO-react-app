import '../styling/stat.css';
import StatData from '../components/StatData';

const Stat=()=>{

    const data = [

        {
            name: "komolehin Israel",
            count: 1000
         },

         {
            name: "Registered Electorates",
            count: 1000
         },

         {
            name: "Registered Votes",
            count: 1000
         },


    ]
    return(
        <div className="homepage-container">
            <div className="stat-cont">
                {
                    data.map(data=>(
                        <StatData data={data} />
                    ))
                }

            </div>
        </div>
    )
}

export default Stat