import { useDispatch } from "react-redux"
import { candidateRegResponse } from "../actions"


const Modal=({response})=>{

    const dispatch =useDispatch()

    return(
        <div className="modal" onClick={()=>dispatch(candidateRegResponse(""))}>
                        <h3>{response}</h3>
        </div>
    )
}

export default Modal