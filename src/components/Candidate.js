const Candidate=({candidate})=>{
    return(
        <div className="candidate-profile">
            <img src={candidate.img} alt = "incoming" className="candidate-image"/>
            <p className="candidate-name">{candidate.name}</p>
            <p className="candidate-party">{candidate.party}</p>
        </div>
    )
}

export default Candidate