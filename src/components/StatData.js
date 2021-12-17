const StatData=({data})=>{
    return(
        <div className='stat-data'>
            <h3>{data.name}</h3>
            <p>{data.count}</p>
        </div>
    )
}

export default StatData