const StatData=({data})=>{
    return(
        <div className='stat-data'>
            <p>{data.count}</p>
            <h3>{data.name}</h3>
            
        </div>
    )
}

export default StatData