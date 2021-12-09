const Candidate=({candidate})=>{
    return(
        <div className="candidate-profile">
            <img src={candidate.img} alt = "incoming"/>
            <p>{candidate.name}</p>
            <p>{candidate.party}</p>
        </div>
    )
}

export default Candidate