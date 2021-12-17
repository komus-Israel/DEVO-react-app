import { useDispatch } from "react-redux"
import { RegResponse } from "../actions"


const Modal=({response})=>{

    const dispatch =useDispatch()

    return(
        <div className="modal" onClick={()=>dispatch(RegResponse(""))}>
                        <h3>{response}</h3>
        </div>
    )
}

export default Modal