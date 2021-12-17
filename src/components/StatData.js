const StatData=({data})=>{
    return(
        <div className='stat-data'>
            <p>{data.name}</p>
            <p>{data.count}</p>
        </div>
    )
}

export default StatData