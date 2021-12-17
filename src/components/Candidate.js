const Candidate=({candidate})=>{
    return(
        <div className="candidate-profile">
            <img src={candidate.img} alt = "incoming" className="candidate-image"/>
            <p className="candidate-name">{candidate.name}</p>
            <h2 className='vote-count'>{candidate.voteCount}</h2>
        </div>
    )
}

export default Candidate